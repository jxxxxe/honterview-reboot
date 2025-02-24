import ContentSection from '@/containers/mypage/components/content-section';
import NickNameSection from '@/containers/mypage/components/nickname-section';
import { TEMPORARY_USER_ID } from '@/shared/constants/question';
import getMypageById from '@/shared/services/mypage/get-user';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '혼터뷰 - 마이 페이지',
  description:
    '북마크한 질문과 연습 기록을 확인하고, 혼터뷰에서의 나의 성장을 확인하세요',
  openGraph: {
    title: '혼터뷰 - 마이 페이지',
    description:
      '북마크한 질문과 연습 기록을 확인하고, 혼터뷰에서의 나의 성장을 확인하세요',
    url: `http://honterview.site/mypage`,
  },
  twitter: {
    title: '혼터뷰 - 마이 페이지',
    description:
      '북마크한 질문과 연습 기록을 확인하고, 혼터뷰에서의 나의 성장을 확인하세요',
  },
};

const MyPage = async () => {
  const user = await getMypageById(TEMPORARY_USER_ID);

  return (
    <div className="wrap relative flex flex-col items-center gap-[0.5rem] pt-[2rem] tablet:pt-[4rem]">
      <NickNameSection originalNickname={user.nickname} />
      <div className="mb-[4rem] flex h-full flex-1 flex-col items-center">
        <ContentSection
          likedQuestionList={user.question_likes}
          interviewList={user.interviews}
        />
      </div>
    </div>
  );
};

export default MyPage;
