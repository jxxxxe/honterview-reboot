import MainCamerScreenSection from './camera-screen';
import MainChattingScreenSection from './chatting-screen';
import MainResultScreenSection from './result-screen';

const MainScreenShotsSection = () => {
  return (
    <div className="w-full bg-blue-50 p-[2rem] xl:p-0">
      <MainCamerScreenSection />
      <MainChattingScreenSection />
      <MainResultScreenSection />
    </div>
  );
};

export default MainScreenShotsSection;
