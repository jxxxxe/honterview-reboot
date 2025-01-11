import MainInterviewAnimationWrapper from '@/containers/main/components/animation-wrapper/main-interview-animation-wrapper';
import InterviewVideoImage from '@/containers/main/images/interview_video.png';
import ScreenShotsScreens from './screenshots-screens-layout';

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
