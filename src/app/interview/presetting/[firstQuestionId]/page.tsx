import PreSetting from '@/containers/presetting';

export interface PreSettingPageProps {
  params: {
    firstQuestionId: string;
  };
}

const PreSettingPage = ({ params }: PreSettingPageProps) => {
  const { firstQuestionId } = params;
  return <PreSetting firstQuestionId={Number(firstQuestionId)} />;
};

export default PreSettingPage;
