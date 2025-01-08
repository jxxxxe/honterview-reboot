import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '혼터뷰 - 면접 질문 리스트',
  description:
    '혼터뷰에서 다양한 면접 질문을 검색하고, 카테고리별로도 탐색하세요. 면접 준비에 필요한 모든 정보를 한곳에서 찾아보세요.',
  openGraph: {
    title: '혼터뷰 - 면접 질문 리스트',
    description:
      '혼터뷰에서 다양한 면접 질문을 검색하고, 카테고리별로도 탐색하세요. 면접 준비에 필요한 모든 정보를 한곳에서 찾아보세요.',
    url: 'http://honterview.site/questions',
  },
  twitter: {
    title: '혼터뷰 - 면접 질문 리스트',
    description:
      '혼터뷰에서 다양한 면접 질문을 검색하고, 카테고리별로도 탐색하세요. 면접 준비에 필요한 모든 정보를 한곳에서 찾아보세요.',
  },
};

const QuestionsListLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return <div className="wrap m-auto max-w-[120rem]">{children}</div>;
};

export default QuestionsListLayout;
