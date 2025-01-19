import { useQuestionList } from '@/containers/question-list/contexts';
import Button, { ButtonType } from '@/shared/components/button';
import { v4 } from 'uuid';

export interface UnSelectedTagListProps {
  filteredData: string[];
  handleTagClick: (name: string) => void;
}

const UnSelectedTagList = ({
  filteredData,
  handleTagClick,
}: UnSelectedTagListProps) => {
  return (
    <div className="contents gap-4">
      {filteredData.length === 0 && (
        <div className="flex h-[4rem] items-center justify-center py-2 text-[1.6rem] text-text-40">
          검색 결과가 없습니다
        </div>
      )}
      {filteredData.map((tag) => (
        <Button
          key={v4()}
          className="h-[4rem] flex-none rounded-[1rem] border-text-40 px-2 py-2 text-black"
          styleType={ButtonType.Type2}
          onClick={() => handleTagClick(tag)}
        >
          {tag}
        </Button>
      ))}
    </div>
  );
};

export default UnSelectedTagList;
