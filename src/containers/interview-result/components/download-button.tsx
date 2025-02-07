'use client';

import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';

interface IProps {
  downloadUrl: string;
}

const DownloadButton = ({ downloadUrl }: IProps) => {
  return (
    <a
      href={downloadUrl}
      download={`honterview_record.webm`}
      className="mt-[1px] block h-[30px] w-[18px]"
    >
      <ArrowDownTrayIcon className="text-slate-500" />
    </a>
  );
};

export default DownloadButton;
