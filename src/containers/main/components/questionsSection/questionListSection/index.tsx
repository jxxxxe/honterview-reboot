import QuestionListImage from '@/containers/main/images/questionListImage.png';

import MainSectionAnimationWrapper from '../../animationWrapper/MainSectionAnimationWrapper';
import ChatBubble from '../../chatBubble';
import MainQuestionsSection from '../components/MainQuestionsSection';

const MainQuestionListSection = () => {
  return (
    <div className="main-section h-screen bg-gradient-to-b from-blue-100 to-white">
      <MainSectionAnimationWrapper className="h-screen">
        <MainQuestionsSection
          imageSrc={QuestionListImage}
          title1="다양한 개발 분야"
          title2="면접 질문을 한눈에"
          imageTitle="면접 질문"
        >
          <ul>
            <ChatBubble className="chat_bubble1 left-[5%] top-[5%]">
              호이스팅(hoisting)에 대해서 설명해주세요
            </ChatBubble>
            <ChatBubble className="chat_bubble3 right-[5%] top-[10%]">
              Spring의 Autowiring 과정에 대해서 설명해주세요
            </ChatBubble>
            <ChatBubble className="chat_bubble4 bottom-[5%] left-[10%]">
              안드로이드의 Thread간 통신방법에 대해 설명해주세요
            </ChatBubble>
            <ChatBubble className="chat_bubble5 bottom-[5%] right-[5%]">
              Swift에서 Class와 Struct의 차이는 무엇인가요?
            </ChatBubble>
            <ChatBubble className="chat_bubble2 bottom-[5%] left-[45%] hidden xl:block">
              네트워크에서 OSI 7계층이란 무엇인가요?
            </ChatBubble>
          </ul>
        </MainQuestionsSection>
      </MainSectionAnimationWrapper>
    </div>
  );
};

export default MainQuestionListSection;
