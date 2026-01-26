---
layout: post
title: "VERSION_HISTORY"
image: GR2.png
date: 2026-01-25 15:50:00 +0900
tags: [web, hacking, google]
categories: web
---

Google Beginner's Request

Forum Defender: VERSION_HISTORY

***

**Google Beginner's Request - VERSION_HISTORY**

![]({{site.baseurl}}/images/GoogleRequest_2026/VERSION_HISTORY/1.png)

https://version-history-web.2025-bq.ctfcompetition.com/

`I wrote some FAQs about this CTF. Took me a few commits to get it right though.`

이번 CTF에 대한 FAQ를 몇 개 작성했어요. 제대로 완성하기까지 몇 번의 커밋 작업이 필요했지만요.


![]({{site.baseurl}}/images/GoogleRequest_2026/VERSION_HISTORY/2.png)

페이지 들어가자마자 보이는 홈페이지

스크립트나 js 파일도 없다.


![]({{site.baseurl}}/images/GoogleRequest_2026/VERSION_HISTORY/3_1.png)

일단 Burpsuite로 확인해보니 요청 헤더 값에 `If-None-Match`, `If-Modified-Since` 두 가지를 발견했다.

두 개를 활용하면 이전 버전을 열 수 있지 않을까해서 이리저리 시도하다가

![]({{site.baseurl}}/images/GoogleRequest_2026/VERSION_HISTORY/3_2.png)

뭐 없었다. 304 반환 시켜도 응답 body 값이 비어 있었다.

그렇다면?

![]({{site.baseurl}}/images/GoogleRequest_2026/VERSION_HISTORY/4.png)

/.git/HEAD 파일이 있는지 체크해봤고, git을 활용하는 것을 확인했다.

git 사용 시 .git이라는 폴더가 자동으로 생성되는데, 이 파일은 숨김 처리해놔서 잘 보이지도 않는다.

따라서 .git 폴더에 접근 제어가 걸려있지 않다면, dumper로 가져올 수 있을 것이다.

참고할만한 사이트 : [dot_git_Folder]

![]({{site.baseurl}}/images/GoogleRequest_2026/VERSION_HISTORY/5.png)

![]({{site.baseurl}}/images/GoogleRequest_2026/VERSION_HISTORY/6.png)


gitdumper로 dump 완료

gitdumper는 Zlib을 통해 압축해두기 때문에 압축해제를 통해

Flag 획득 완료


**Ref**


참조한 사이트 : [gitdumper], [gitdumper_active], [dot_git_Folder], [CyberChef]

[gitdumper_active]: https://blog.naver.com/yjw_sz/221603422602

[gitdumper]: https://github.com/arthaud/git-dumper

[CyberChef]: https://gchq.github.io/CyberChef

[dot_git_Folder]: https://zoosso.tistory.com/818