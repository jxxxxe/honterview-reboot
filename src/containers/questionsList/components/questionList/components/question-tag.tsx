import Button, { ButtonType } from '@/components/button';

export interface QuestionTagProps {
  tag: string;
  handleTagClick: (tag: string) => void;
}

const QuestionTag = ({ tag, handleTagClick }: QuestionTagProps) => {
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    handleTagClick(tag);
  };

  return (
    <Button
      className="mx-3 rounded-full border-none bg-[#e5e7eb] px-4 py-3 font-semibold text-black"
      styleType={ButtonType.Type2}
      onClick={handleClick}
    >
      {tag}
    </Button>
  );
};

export default QuestionTag;
