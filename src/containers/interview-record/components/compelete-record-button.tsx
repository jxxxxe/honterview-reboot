'use client';

import { completeInterview } from '@/shared/services/record-interview/complete-interview';
import { PowerIcon } from '@heroicons/react/24/outline';

const CompleteRecordButton = () => {
  return (
    <button
      className="hover:text-primaries-primary"
      onClick={completeInterview}
    >
      <PowerIcon />
      면접 종료
    </button>
  );
};

export default CompleteRecordButton;
