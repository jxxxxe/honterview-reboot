/*
  Warnings:

  - You are about to drop the `AwnserLike` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "AwnserLike" DROP CONSTRAINT "AwnserLike_answerId_fkey";

-- DropForeignKey
ALTER TABLE "AwnserLike" DROP CONSTRAINT "AwnserLike_userId_fkey";

-- DropTable
DROP TABLE "AwnserLike";

-- CreateTable
CREATE TABLE "AnswerLike" (
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,
    "answerId" INTEGER NOT NULL,

    CONSTRAINT "AnswerLike_pkey" PRIMARY KEY ("userId","answerId")
);

-- AddForeignKey
ALTER TABLE "AnswerLike" ADD CONSTRAINT "AnswerLike_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnswerLike" ADD CONSTRAINT "AnswerLike_answerId_fkey" FOREIGN KEY ("answerId") REFERENCES "Answer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
