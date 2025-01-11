import '@/containers/main/style.css';

import MainIntroSection from '../containers/main/components/intro-section';
import MainOutroSection from '../containers/main/components/outro-section';
import MainQuestionListSection from '../containers/main/components/questions-section/question-list-section';
import MainQuestionDetailSection from '../containers/main/components/questions-section/question-detail-section';
import MainScreenShotsSection from '../containers/main/components/interview-section';

const HomePage = async () => {
  return (
    <div className="h-full text-gray-800">
      <MainIntroSection />
      <MainQuestionListSection />
      <MainQuestionDetailSection />
      <MainScreenShotsSection />
      <MainOutroSection />
    </div>
  );
};

export default HomePage;
