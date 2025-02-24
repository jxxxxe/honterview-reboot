'use server';

import prisma from '@/shared/libs/prisma';

const editMyNickname = async (userId: number, newNickname: string) => {
  const user = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      nickname: newNickname,
    },
  });

  return user;
};

export default editMyNickname;
