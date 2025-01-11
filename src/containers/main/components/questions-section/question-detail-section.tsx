import QuestionDetailImage from '@/containers/main/images/questionDetailImage.png';

import MainSectionAnimationWrapper from '../animation-wrapper/main-section-animation-wrapper';
import ChatBubble from './chat-bubble';
import MainQuestionsSection from './questions-section-layout';

const MainQuestionDetailSection = () => {
  return (
    <div className="main-section h-screen bg-gradient-to-b from-white to-pink-50">
      <MainSectionAnimationWrapper className="h-screen">
        <MainQuestionsSection
          imageSrc={QuestionDetailImage}
          title1="모범 답변과"
          title2="꼬리 질문까지"
          imageTitle="면접 질문 상세"
          title1Detail="* 좋아요를 많이 받은 다른 사용자의 답변"
        >
          <div className="">
            <ChatBubble
              className="chat_bubble1 left-[5%] top-[5%]"
              isAnswer
            >
              호이스팅이란 변수 및 함수 선언문이 스코프 내의 최상단으로
              끌어올려지는 현상을 말합니다
            </ChatBubble>
            <ChatBubble
              className="chat_bubble3 right-[5%] top-[10%]"
              isAnswer
            >
              컨테이너에서 타입을 이용해 의존 대상 객체를 검색하고, 할당할 수
              있는 빈 객체를 찾아 주입합니다
            </ChatBubble>
            <ChatBubble
              className="chat_bubble4 bottom-[5%] left-[10%]"
              isAnswer
            >
              두 개 이상의 스레드를 사용할 때의 동기화 이슈를 차단하기 위해
              Looper와 Handler를 사용해요
            </ChatBubble>
            <ChatBubble
              className="chat_bubble5 bottom-[5%] right-[5%]"
              isAnswer
            >
              Class는 참조 타입이고, Struct는 값 타입입니다
            </ChatBubble>
            <ChatBubble
              className="chat_bubble2 bottom-[5%] left-[45%] hidden xl:block"
              isAnswer
            >
              OSI 7계층은 네트워크 통신을 구성하는 요소들 7개의 계층으로 표준화
              한 것입니다
            </ChatBubble>
          </div>
        </MainQuestionsSection>
      </MainSectionAnimationWrapper>
    </div>
  );
};

export default MainQuestionDetailSection;
