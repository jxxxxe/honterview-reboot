import PreSetting from '@/containers/presetting';

export interface PreSettingPageProps {
  params: Promise<{
    firstQuestionId: string;
  }>;
}

const PreSettingPage = async ({ params }: PreSettingPageProps) => {
  const { firstQuestionId } = await params;

  return <PreSetting firstQuestionId={Number(firstQuestionId)} />;
};

export default PreSettingPage;
