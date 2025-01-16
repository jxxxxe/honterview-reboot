export interface QuestionTitleProps {
  content: string;
}

const QuestionTitle = ({ content }: QuestionTitleProps) => {
  return (
    <div className="flex items-start text-[2rem]">
      <span className="text-text-40">Q.</span>
      <span className="line-clamp-2 h-[7rem] overflow-hidden text-ellipsis break-words px-3">
        {content}
      </span>
    </div>
  );
};

export default QuestionTitle;
