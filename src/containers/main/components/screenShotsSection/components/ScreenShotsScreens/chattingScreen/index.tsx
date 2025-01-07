import MainInterviewAnimationWrapper from '@/containers/main/components/animationWrapper/MainInterviewAnimationWrapper';
import InterviewChattingImage from '@/containers/main/images/interview_chatting.png';

import ScreenShotsScreens from '../components/ScreenShotsScreens';

const MainChattingScreenSection = () => {
  return (
    <MainInterviewAnimationWrapper isLeft={false}>
      <ScreenShotsScreens
        imageSrc={InterviewChattingImage}
        imageTitle="모의 면접 - 채팅모드"
      >
        <>
          <h2>
            <span className="text-primaries-primary">AI 면접관</span>의
          </h2>
          <h2>
            <span className="text-primaries-primary">꼬리 질문</span>으로
          </h2>
          <h2>생동감 있는 연습</h2>
        </>
      </ScreenShotsScreens>
    </MainInterviewAnimationWrapper>
  );
};

export default MainChattingScreenSection;
