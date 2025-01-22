import {
  TERMS_DENY_TEXT,
  TERMS_DURATION_TEXT,
  TERMS_DURATION_TITLE,
  TERMS_GOAL_TEXT,
  TERMS_GOAL_TITLE,
  TERMS_TARGET_TEXT,
  TERMS_TARGET_TITLE,
  TERMS_TITLE,
} from './constants';

const TermsDescriptionSection = () => {
  return (
    <>
      <p className="mb-[1rem] font-semibold">{TERMS_TITLE}</p>
      <div className="mb-[1rem] flex">
        <div className="w-[25rem] border border-r-0">
          <div className="flex h-[8rem] items-center bg-background-20 p-[1rem] tablet:h-fit">
            {TERMS_GOAL_TITLE}
          </div>
          <div className="h-[5rem] p-[1rem]">{TERMS_GOAL_TEXT}</div>
        </div>
        <div className="w-[33rem] border border-r-0">
          <div className="flex h-[8rem] items-center bg-background-20 p-[1rem] tablet:h-fit">
            {TERMS_TARGET_TITLE}
          </div>
          <div className="p-[1rem]">{TERMS_TARGET_TEXT}</div>
        </div>
        <div className="w-[18rem] border">
          <div className="flex h-[8rem] items-center bg-background-20 p-[1rem] tablet:h-fit">
            {TERMS_DURATION_TITLE}
          </div>
          <span className="flex p-[1rem]">{TERMS_DURATION_TEXT}</span>
        </div>
      </div>
      <div className="mb-[2rem] tablet:mb-[5rem]">{TERMS_DENY_TEXT}</div>
    </>
  );
};

export default TermsDescriptionSection;
