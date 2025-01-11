import { v4 as uuidv4 } from 'uuid';

import Button, { ButtonType } from '@/shared/components/button';

import { ArrowPathIcon, XMarkIcon } from '@heroicons/react/24/outline';

export interface SelectedTagListProps {
  selectedTagList: string[];
  setSelectedTagList: (selectedTagList: string[]) => void;
  onDeleteTagClick: (name: string) => void;
}

const SelectedTagList = ({
  selectedTagList,
  setSelectedTagList,
  onDeleteTagClick,
}: SelectedTagListProps) => {
  const handleResetClick = () => {
    setSelectedTagList([]);
  };
  return (
    <div className="flex h-[4rem] flex-wrap gap-4 py-4">
      {selectedTagList.map((tag: string) => (
        <Button
          key={uuidv4()}
          styleType={ButtonType.Type2}
          className="flex gap-2 rounded-[1rem] px-2 py-2 text-primaries-primary"
        >
          {tag}
          <XMarkIcon
            className="h-[14px] w-[14px] stroke-primaries-primary"
            onClick={() => onDeleteTagClick(tag)}
          />
        </Button>
      ))}
      {selectedTagList.length > 0 && (
        <button className="flex items-center">
          <ArrowPathIcon
            className="size-8"
            onClick={handleResetClick}
          />
        </button>
      )}
    </div>
  );
};

export default SelectedTagList;
