export interface StepBarProps {
  isPassed: boolean;
}

const StepBar = ({ isPassed }: StepBarProps) => {
  const bgColor = isPassed ? 'bg-primaries-primary' : 'bg-gray-100';

  return (
    <div
      className={`mb-[2.5rem] hidden tablet:inline-flex ${bgColor} h-[0.8rem] w-[11rem] rounded-3xl`}
    />
  );
};

export default StepBar;
