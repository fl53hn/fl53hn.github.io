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


하다보면 이렇게 손으로 하는 건 아닌지 걱정도 해주고

![]({{site.baseurl}}/images/GoogleRequest/DoorsEverywhere3/7.png)

레고 세트 교환식도 한다.

![]({{site.baseurl}}/images/GoogleRequest/DoorsEverywhere3/8.png)

![]({{site.baseurl}}/images/GoogleRequest/DoorsEverywhere3/9.png)

여튼 Flag 획득

**시행착오**

1. PHP 내에 있는 기능을 python으로 옮겨오기가 힘들었다.