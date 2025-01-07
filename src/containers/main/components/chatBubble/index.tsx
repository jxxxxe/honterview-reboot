import './style.css';

import { twMerge } from 'tailwind-merge';

import { ChatBubbleProps } from './type';

const ChatBubble = ({ children, className, isAnswer }: ChatBubbleProps) => {
  return (
    <li
      className={twMerge(
        `leading-1.5 absolute z-10 h-[10rem] w-[15rem] list-none rounded-[3rem] text-[1rem] md:h-[14rem] md:w-[25rem] md:rounded-ss-[0rem] xl:block xl:h-[15rem] xl:w-[30rem] ${isAnswer ? 'bg-pink-600' : 'bg-primaries-primary'}  ${className}`,
      )}
    >
      <div
        className={`flex flex-col ${isAnswer ? 'gap-[0.5rem] p-[1.5rem]' : 'gap-[1rem] p-[2rem]'} text-[1rem] text-white tablet:text-[1.5rem] xl:text-[1.8rem]`}
      >
        <p>{isAnswer ? 'A' : 'Q'}.</p>
        <p>{children}</p>
      </div>
    </li>
  );
};

export default ChatBubble;
