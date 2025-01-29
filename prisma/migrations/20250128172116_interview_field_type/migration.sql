/*
  Warnings:

  - You are about to drop the `TailQuestion` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "TailQuestion" DROP CONSTRAINT "TailQuestion_interviewId_fkey";

-- DropForeignKey
ALTER TABLE "TailQuestion" DROP CONSTRAINT "TailQuestion_userId_fkey";

-- AlterTable
ALTER TABLE "Interview" ADD COLUMN     "answers" TEXT[],
ADD COLUMN     "questions" TEXT[];

-- DropTable
DROP TABLE "TailQuestion";
