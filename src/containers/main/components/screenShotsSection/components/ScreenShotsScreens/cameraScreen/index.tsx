import MainInterviewAnimationWrapper from '@/containers/main/components/animationWrapper/MainInterviewAnimationWrapper';
import InterviewVideoImage from '@/containers/main/images/interview_video.png';

import ScreenShotsScreens from '../components/ScreenShotsScreens';

const MainCamerScreenSection = () => {
  return (
    <MainInterviewAnimationWrapper isLeft>
      <ScreenShotsScreens
        imageSrc={InterviewVideoImage}
        imageTitle="모의 면접 - 화상모드"
      >
        <>
          <h2>
            <span className="text-primaries-primary">카메라</span>로 촬영하고
          </h2>
          <h2>
            <span className="text-primaries-primary">마이크</span>로 답변하는
          </h2>
          <h2>나만의 면접 리허설</h2>
        </>
      </ScreenShotsScreens>
    </MainInterviewAnimationWrapper>
  );
};

export default MainCamerScreenSection;
