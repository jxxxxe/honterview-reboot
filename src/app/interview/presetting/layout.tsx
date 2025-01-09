import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '혼터뷰 - 면접 준비',
  description:
    '혼터뷰에서 제공하는 면접 준비 도구를 통해 면접 첫 질문, 타이머, 꼬리 질문 개수, 면접 카테고리, 면접 연습 방식을 설정하세요.',
  openGraph: {
    title: '혼터뷰 - 면접 준비',
    description:
      '혼터뷰에서 제공하는 면접 준비 도구를 통해 면접 첫 질문, 타이머, 꼬리 질문 개수, 면접 카테고리, 면접 연습 방식을 설정하세요.',
    url: `http://honterview.site/interview/setup`,
  },
  twitter: {
    title: '혼터뷰 - 면접 준비',
    description:
      '혼터뷰에서 제공하는 면접 준비 도구를 통해 면접 첫 질문, 타이머, 꼬리 질문 개수, 면접 카테고리, 면접 연습 방식을 설정하세요.',
  },
};

const PresettingLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="flex h-[calc(100vh-7rem)] items-center justify-center bg-opacity-10">
      {children}
    </div>
  );
};

export default PresettingLayout;
