import { TERMS_DESCRIPTION, TERMS_HEADER } from './constants';

const TermsHeaderSection = () => {
  return (
    <>
      <h1 className="mb-[1rem] flex w-full justify-center text-extraLarge font-bold">
        {TERMS_HEADER}
      </h1>
      <p className="mb-[3rem] flex w-full justify-center tablet:mb-[5rem]">
        {TERMS_DESCRIPTION}
      </p>
    </>
  );
};

export default TermsHeaderSection;
