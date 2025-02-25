import { create } from 'zustand';

const initialState = {
  totalStep: 4,
  currentStep: 1,
  isNextButtonOn: false,
};

const useStepStore = create<StepState>((set) => ({
  ...initialState,
  increaseStep: () =>
    set(({ currentStep }) => ({ currentStep: currentStep + 1 })),
  decreaseStep: () =>
    set(({ currentStep }) => ({ currentStep: currentStep - 1 })),
  setSettingStep: () => set(() => ({ currentStep: 2 })),
  setCameraStep: () => set(() => ({ totalStep: 4 })),
  setChattingStep: () => set(() => ({ totalStep: 2 })),
  setNextButtonOn: () => set(() => ({ isNextButtonOn: true })),
  setNextButtonOff: () => set(() => ({ isNextButtonOn: false })),
  resetAllStepDatas: () => set(initialState),
}));

interface StepState {
  totalStep: number;
  currentStep: number;
  isNextButtonOn: boolean;
  increaseStep: () => void;
  decreaseStep: () => void;
  setSettingStep: () => void;
  setCameraStep: () => void;
  setChattingStep: () => void;
  setNextButtonOn: () => void;
  setNextButtonOff: () => void;
  resetAllStepDatas: () => void;
}

export default useStepStore;
