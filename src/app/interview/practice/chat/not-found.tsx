import Logo from '@/shared/components/logo';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

const InvalidQuestionPage = () => {
  return (
    <div className="fit-wrap flex flex-col items-center justify-center gap-5">
      <div className="flex flex-col items-center justify-center">
        <QuestionMarkCircleIcon className="mb-[-1rem] size-16 text-slate-900" />
        <Logo
          width={150}
          height={150}
        />
      </div>
      <h1 className="text-center text-[2.5rem] font-semibold">
        면접 전 설정이 필요합니다
      </h1>
      <ul className="flex items-center gap-5">
        <Link
          href="/interview/presetting"
          className="navigation-button px-[3rem]"
        >
          면접 설정 페이지
        </Link>
      </ul>
    </div>
  );
};

export default InvalidQuestionPage;
