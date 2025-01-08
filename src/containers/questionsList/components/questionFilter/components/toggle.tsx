import Button, { ButtonType } from '@/components/button';

import { ToggleProps } from '../types';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

const Toggle = ({ toggle, setToggle }: ToggleProps) => {
  return (
    <div className="absolute right-0 bg-gradient-to-r from-transparent via-white/50 to-white pl-5">
      <Button
        className="h-[4rem] flex-none rounded-[1rem] px-2 py-2 text-black"
        styleType={ButtonType.Type2}
        onClick={() => setToggle(!toggle)}
      >
        <span className="h-[24px] w-[24px]">
          {toggle ? <ChevronDownIcon /> : <ChevronUpIcon />}
        </span>
      </Button>
    </div>
  );
};

export default Toggle;
