import { StepCircleProps } from '../type';

const StepCircle = ({ number, isPassed }: StepCircleProps) => {
  const bgColor = isPassed ? 'bg-primaries-primary' : 'bg-gray-100';
  const textColor = isPassed ? 'text-text-20' : 'text-neutral-600';

  return (
    <div
      className={`inline-flex h-[4rem] w-[4rem] items-center justify-center rounded-full ${bgColor} ${textColor}`}
    >
      {number}
    </div>
  );
};

export default StepCircle;
