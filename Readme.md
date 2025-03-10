# [혼터뷰 : Reboot](https://honterview-reboot.vercel.app/) (Beta)
개발 진행 중(25.01~, 3월 내 완료 예정) <br>


------

## 프로젝트 개요
- 기존의 혼터뷰 사이트가 AWS 지원 종료로 인해 배포 중단됨에 따라, 배포 재개되도록 리팩토링 한 프로젝트<br>
- 디자인, 기능은 기존의 혼터뷰와 동일합니다(일부 제외) => [기존 혼터뷰 리파지토리](https://github.com/DevCourse-I6/Team-I6-Honterview-FE)<br><br>

## 개발자 

| <img src="https://github.com/jxxxxe.png" style="width:100px"> |
|:-----:|
|[안정은](https://github.com/jxxxxe) |


  <br>


## 변경사항
1️⃣ 스택 변경 사항
1. Next.js 풀스택
2. prisma ORM 적용
3. Serverless SQL(vercel postgres)로 db 관리
4. vercel/blob으로 동영상 storage 관리
5. vercel로 배포
<br>

2️⃣ 서비스 주요 변경 사항
1. 디자인 변경 : 모의 면접(채팅, 화상) 페이지, 면접 결과 페이지 
2. 북마크 기능 삭제 : 좋아요로 통일
3. 면접 시 gpt의 꼬리질문은 외부 공개x : 첫 질문과 답만 공개
4. 면접 중간 과정을 서버에 저장x : 새로고침 시 인터뷰를 삭제. 면접 완료 시에만 서버에 저장
<br>

3️⃣ 개발 주요 변경 사항
1. 불필요한 합성 컴포넌트를 일반 컴포넌트로 변경 
2. 페이지에서는 api 등 처리로직을 놓지 않는다. 쓰이는 컴포넌트에서 처리하도록 변경
3. 네이밍을 좀 더 구체적이고 직관적이게 변경
4. 디렉토리 네이밍 변경 : 카멜케이스 → 케밥케이스
5. 디렉토리 구조 변경
   
