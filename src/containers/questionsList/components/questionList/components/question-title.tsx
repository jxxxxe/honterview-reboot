export interface QuestionTitleProps {
  content: string;
}

const QuestionTitle = ({ content }: QuestionTitleProps) => {
  return (
    <div className="mr-[3rem]">
      <div className="flex items-start">
        <span className="text-text-40">Q.</span>
        <span className="line-clamp-2 h-[7rem] overflow-hidden text-ellipsis break-words px-3">
          {content}
        </span>{' '}
      </div>
    </div>
  );
};

export default QuestionTitle;
