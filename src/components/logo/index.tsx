import Image from 'next/image';
import Link from 'next/link';

import { IProps } from './types';

const Logo = ({ width, height, ...rest }: IProps) => {
  return (
    <Link href="/">
      <Image
        quality={100}
        src="/images/logo-removebg.png"
        alt="혼터뷰 로고"
        width={width}
        height={height}
        {...rest}
      />
    </Link>
  );
};

export default Logo;
