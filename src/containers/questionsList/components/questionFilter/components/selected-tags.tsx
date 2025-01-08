import { v4 as uuidv4 } from 'uuid';

import Button, { ButtonType } from '@/components/button';

import { SelectedTagsProps } from '../types';
import { ArrowPathIcon, XMarkIcon } from '@heroicons/react/24/outline';

const SelectedTags = ({
  selectedTags,
  setSelectedTags,
  handleTagClick,
}: SelectedTagsProps) => {
  const handleResetClick = () => {
    setSelectedTags([]);
  };
  return (
    <div className="flex h-[4rem] flex-wrap gap-4 py-4">
      {selectedTags.map((tag: string) => (
        <Button
          key={uuidv4()}
          styleType={ButtonType.Type2}
          className="flex gap-2 rounded-[1rem] px-2 py-2 text-primaries-primary"
        >
          {tag}
          <XMarkIcon
            className="h-[14px] w-[14px] stroke-primaries-primary"
            onClick={() => handleTagClick(tag)}
          />
        </Button>
      ))}
      {selectedTags.length > 0 && (
        <button className="flex items-center">
          <ArrowPathIcon onClick={handleResetClick} />
        </button>
      )}
    </div>
  );
};

export default SelectedTags;
