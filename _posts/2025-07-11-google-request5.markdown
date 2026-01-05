---
layout: post
title: "No refund"
image: GR1.png
date: 2025-07-10 14:55:00 +0900
tags: [web, hacking, google]
categories: web
---

Google Beginner's Request

No refund

***

**Google Beginner's Request - No refund**

![]({{site.baseurl}}/images/GoogleRequest/Norefund/1.png)


`You had a train service cancelled and you are entitled to a full refund. However the train companies website is not allowing you to. Can you still get it?`

기차 운행이 취소되어 전액 환불받으실 수 있습니다. 그런데 기차 회사 웹사이트에서는 환불이 불가능합니다. 아직 환불받으실 수 있나요?


![]({{site.baseurl}}/images/GoogleRequest/Norefund/2.png)

코드를 확인해보자

1. POST요청을 통해 ticket_id와 reason을 보내고 있다.
2. ticket_id를 알 수 있다면 변조하여 원하는 티켓을 환불할 수 있지 않을까?

![]({{site.baseurl}}/images/GoogleRequest/Norefund/3.png)
![]({{site.baseurl}}/images/GoogleRequest/Norefund/4.png)

위의 ticket_id를 확인한 뒤 아래에서 Post 전송 값 중 ticket_id를 변조하여 전송했다.


![]({{site.baseurl}}/images/GoogleRequest/Norefund/5.png)

FLAG 획득 완료

**시행착오**

-