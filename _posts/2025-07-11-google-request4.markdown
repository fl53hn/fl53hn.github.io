---
layout: post
title: "Message"
image: GR1.png
date: 2025-07-10 14:55:00 +0900
tags: [web, hacking, google]
categories: web
---

Google Beginner's Request

Message

***

**Google Beginner's Request - Message**

![]({{site.baseurl}}/images/GoogleRequest/salt/1.png)

`Who remembers PHP? The password_hash() function is so convenient, no one can guess my password`

password_hash()는 간편하며, 본인의 패스워드를 볼 수 없다고 호언장담중이다.


![]({{site.baseurl}}/images/GoogleRequest/salt/2.png)

코드를 확인해보자

1. GET 요청으로 salt값 없이 전달할 경우
`Salt is important for security! Please give me a salt.`

라는 문구가 뜬다.

2. GET 요청으로 salt값을 16자 미만으로 전달할 경우
`This is too little salt! For tasty hashes we need more.`

라는 문구가 뜬다.

3. GET 요청으로 16자 이상의 Salt값을 전달할 경우

`Here you are! A tasty hash for you 😋 The flag is secure because hashes are irreversible. Even more so if they are salty!`

라는 문구와 함께 password와 Salt값을 섞은 값을 전달한다.

따라서 16자 이상의 Salt값을 전달하여 Password값을 얻어내면 된다.

하지만, password_hash는 함수가 실행될 때 마다 각기 다른 값을 뽑아낸다.

여기서 개념을 짚고 넘어가야 한다.

![]({{site.baseurl}}/images/GoogleRequest/salt/password_hash.png)

`Using the PASSWORD_BCRYPT as the algorithm,`
`will result in the password parameter being truncated to a maximum length of 72 bytes.'`

72바이트 이후에는 hash값이 잘린다는 내용
-> 그렇다면 Salt값을 71바이트로 넣고 나머지 하나를 무작위 대입한 뒤 대조해보면 되지 않을까?

![]({{site.baseurl}}/images/GoogleRequest/salt/php.png)

예상대로 72자가 넘어가게되면 뒤의 password값이 잘리게 되며,
Salt+FLAG값을 넣고 있으므로 FLAG값을 하나 얻을 때 마다
Salt값을 71에서 하나 씩 감소시키면된다.

**사용한 코드**
{% highlight python %}
import bcrypt
import requests
import warnings
from bs4 import BeautifulSoup as bs
import time
warnings.filterwarnings('ignore')

headers = {
    'Host': 'msg-web.2024-bq.ctfcompetition.com',
    'Sec-Ch-Ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Google Chrome";v="138"',
    'Sec-Ch-Ua-Mobile': '?0',
    'Sec-Ch-Ua-Platform': '"Windows"',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'Sec-Fetch-Site': 'none',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-User': '?1',
    'Sec-Fetch-Dest': 'document',
    # 'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7',
    'Priority': 'u=0, i',
}

params = {
    'salt': 'A'*72,
}

a = b"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_{}"
flag = ""
for i in range(1,41):
    params = {
    'salt': 'A'*(72-i),
    }
    response = requests.get('https://msg-web.2024-bq.ctfcompetition.com/', params=params, headers=headers, verify=False)
    html = response.text
    soup = bs(html, "html.parser")
    pre_tag = soup.find("pre")
    hashed = pre_tag.text.strip().encode()
    for j in a:
        password = b"A" * (72-i) + flag.encode() + bytes([j])  # i는 정수니까 bytes로 변환
        if bcrypt.checkpw(password, hashed):
            flag = flag + chr(j)
            print(f"Match! now flag is : {flag}")
            time.sleep(1)
            break
    

{% endhighlight %}


![]({{site.baseurl}}/images/GoogleRequest/salt/last.png)

FLAG 획득 완료

**시행착오**

1. PHP 내에 있는 기능을 python으로 옮겨오기가 힘들었다.
참고한 사이트

bcrypt : [bcrypt]

password-hash : [password-hash]

[bcrypt]: https://pkg.go.dev/golang.org/x/crypto/bcrypt
[password-hash]: https://www.php.net/password-hash