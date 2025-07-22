---
layout: post
title: "Jotes"
image: GR1.png
date: 2025-07-21 14:55:00 +0900
tags: [web, hacking, google]
categories: web
---

Google Beginner's Request

Jotes

***

**Google Beginner's Request - Jotes**

![]({{site.baseurl}}/images/GoogleRequest/Jotes/1.png)


`Welcome to our note taking app, I hope you can't see what we're writing`

저희의 노트 작성 앱에 오신 것을 환영합니다. 저희가 무엇을 쓰고 있는지 보이지 않기를 바랍니다.


![]({{site.baseurl}}/images/GoogleRequest/Jotes/2.png)

들어가자마자 보이는 로그인 화면
아래에는 JWT verification 알고리즘을 새로 도입했다는 이야기가 나오고 있다.

![]({{site.baseurl}}/images/GoogleRequest/Jotes/3.png)
![]({{site.baseurl}}/images/GoogleRequest/Jotes/4.png)

로그인 시 서버에서 JWT 토큰을 발급해주는 시스템이며
JWT를 통하여 글을 작성하거나 업데이트 시에 사용한다.

![]({{site.baseurl}}/images/GoogleRequest/Jotes/5.png)

JWT.io 사이트로 가서 확인 시 PAYLOAD를 확인할 수 있으나
signature를 알지 못하면 변조를 할 수 없다.

따라서
1) Signature key를 무작위 대입 공격을 통해 알아낸다!
라는 결론에 도달했으나.
100,000개 정도의 비밀번호를 대입했는데, 나오지 않았다.
무작위 대입 공격은 아닌듯

2) ALG를 변경한다.
ALG : HS256으로 사용중이다. 그러나

![]({{site.baseurl}}/images/GoogleRequest/Jotes/6.png)

alg 중에서는 none이라는 것이 있다.
alg에 대해서 따로 화이트리스트 필터링 같은 게 존재하지 않을 경우
alg를 none으로 설정하여 서버에서 서명을 받을 수 있다.

![]({{site.baseurl}}/images/GoogleRequest/Jotes/8.png)
![]({{site.baseurl}}/images/GoogleRequest/Jotes/9.png)

따라서 얻었던 JWT중 
1. alg를 none으로 변조한다.
2. PAYLOAD를 admin으로 전부 변조한다.
3. 얻어낸 JWT를 페이지에 삽입하여 변조한다.

![]({{site.baseurl}}/images/GoogleRequest/Jotes/10.png)

FLAG 획득 완료


**시행착오**

한 14일 간 안풀려서 골머리를 앓다가 찾아냈다.

JWT에 alg값을 변조할 경우 뚫린다는 사실은 처음 알았는데,
생각보다 메이저한 취약점이라고 적혀있다...
참조한 사이트 : [JWT_Attack]

[JWT_Attack]: https://www.vaadata.com/blog/jwt-json-web-token-vulnerabilities-common-attacks-and-security-best-practices/#exploiting-the-none-algorithm

