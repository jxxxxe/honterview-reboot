import MainCamerScreenSection from './components/ScreenShotsScreens/cameraScreen';
import MainChattingScreenSection from './components/ScreenShotsScreens/chattingScreen';
import MainResultScreenSection from './components/ScreenShotsScreens/resultScreen';

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
