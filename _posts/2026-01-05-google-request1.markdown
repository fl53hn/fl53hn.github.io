---
layout: post
title: "Forum Defender: The Warden's Gauntlet (Part I)"
image: GR2.png
date: 2026-01-03 16:22:00 +0900
tags: [web, hacking, google]
categories: web
---

Google Beginner's Request

Forum Defender: The Warden's Gauntlet (Part I)

***

**Google Beginner's Request - Forum Defender: The Warden's Gauntlet (Part I)**

![]({{site.baseurl}}/images/GoogleRequest/ForumDefender1/1.png)

https://forum-defender-web.2025-bq.ctfcompetition.com

`Forum Defender, a next-generation communication platform engineered with a security core. The system is patrolled by a sleepless admin known only as 'The Warden'. The Warden's systems are built upon the belief that sensitive data is isolated and referenced only internally. Compromise the integrity of the system and demonstrate its fallibility to the world.`

포럼 디펜더는 보안을 핵심으로 설계된 차세대 커뮤니케이션 플랫폼입니다. 이 시스템은 '워든'이라는 이름으로만 알려진, 잠 못 이루는 밤을 보내는 관리자에 의해 감시됩니다. 워든의 시스템은 민감한 데이터는 격리되어 내부에서만 참조된다는 신념 위에 구축되었습니다. 시스템의 무결성을 훼손하면 세상에 그 허점을 드러내게 될 것입니다.


![]({{site.baseurl}}/images/GoogleRequest/ForumDefender1/2.png)

회원가입을 한 뒤 마이페이지에 들어가게되면 userId를 Get 방식으로 받고 있음을 확인할 수 있다.

현재 userID는 1684인 것을 확인한 뒤 userID를 변조하여 요청을 보내보자


![]({{site.baseurl}}/images/GoogleRequest/ForumDefender1/3.png)

userID를 1683으로 변경 시 다른 사람의 아이디가 노출되는 것을 확인할 수 있다.

이후 userID를 1681~1684까지 있는 것을 확인하였으나 admin은 없어서

bruteforce를 통해 admin 계정의 userID를 알아내고자 한다.


![]({{site.baseurl}}/images/GoogleRequest/ForumDefender1/4.png)

1부터 현재 1684까지의 값을 userID에 넣고 요청을 보낸다.


![]({{site.baseurl}}/images/GoogleRequest/ForumDefender1/5.png)

특정 번호에서 admin 계정의 userID를 확인할 수 있다.

FLAG 획득 완료


**시행착오**

딱히 없었다.

