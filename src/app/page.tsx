import '@/containers/main/style.css';
import MainIntroSection from '../containers/main/components/introSection';
import MainOutroSection from '../containers/main/components/outroSection';
import MainQuestionListSection from '../containers/main/components/questionsSection/questionListSection';
import MainQuestionDetailSection from '../containers/main/components/questionsSection/questionsDetailSection';
import MainScreenShotsSection from '../containers/main/components/screenShotsSection';

const Home = () => {
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

export default Home;
