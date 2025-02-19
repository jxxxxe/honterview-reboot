'use client';

import { HTMLAttributes, ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { twMerge } from 'tailwind-merge';

export interface IProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  visible: boolean;
  wrapperClassName?: string;
  onClose?: () => void;
}
const Modal = ({
  children,
  visible,
  wrapperClassName,
  onClose,
  ...rest
}: IProps) => {
  const [body, setBody] = useState<HTMLElement | null>(null);
  const wrapperStyle = twMerge(
    `fixed left-0 top-0 z-50 h-screen w-screen cursor-default bg-black/20 ${wrapperClassName}`,
  );
  const containerStyle = twMerge(
    `fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${rest.className}`,
  );

  const handleClickAway = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { target, currentTarget } = e;

    if (target === currentTarget) {
      onClose && onClose();
    }
  };

  useEffect(() => {
    setBody(document.body);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const { key } = e;

      if (key === 'Escape') {
        onClose && onClose();
      }
    };

    if (visible) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [visible, onClose]);

  if (!visible || !body) {
    return null;
  }

  return createPortal(
    <div
      role="button"
      tabIndex={-1}
      onClick={handleClickAway}
      onKeyDown={() => {}}
      className={wrapperStyle}
    >
      <div className={containerStyle}>{children}</div>
    </div>,
    body,
  );
};

export default Modal;
