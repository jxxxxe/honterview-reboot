import '@/containers/main/style.css';

import MainScreenShotsSection from '@/containers/main/components/interview-section';
import MainIntroSection from '@/containers/main/components/intro-section';
import MainQuestionDetailSection from '@/containers/main/components/questions-section/question-detail-section';
import MainQuestionListSection from '@/containers/main/components/questions-section/question-list-section';
import MainOutroSection from '@/containers/main/components/outro-section';

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
