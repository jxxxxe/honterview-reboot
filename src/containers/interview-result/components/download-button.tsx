import Button, { ButtonType } from '@/shared/components/button';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';

interface IProps {
  createdAt: Date;
  downloadUrl: string;
}

const DownloadButton = ({ createdAt, downloadUrl }: IProps) => {
  return (
    <a
      href={downloadUrl}
      download={`honterview_${createdAt.toString()}.webm`}
    >
      <Button
        styleType={ButtonType.Type2}
        className="w-fit gap-2 px-10"
      >
        <span className="text-medium">영상 다운로드</span>
        <ArrowDownTrayIcon className="size-8" />
      </Button>
    </a>
  );
};

export default DownloadButton;
