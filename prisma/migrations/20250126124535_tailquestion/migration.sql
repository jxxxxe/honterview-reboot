/*
  Warnings:

  - You are about to drop the column `headQuestionId` on the `Question` table. All the data in the column will be lost.
  - You are about to drop the column `interviewId` on the `Question` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[firstQuestionId]` on the table `Interview` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `firstQuestionId` to the `Interview` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Question" DROP CONSTRAINT "Question_headQuestionId_fkey";

-- DropForeignKey
ALTER TABLE "Question" DROP CONSTRAINT "Question_interviewId_fkey";

-- AlterTable
ALTER TABLE "Interview" ADD COLUMN     "firstQuestionId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Question" DROP COLUMN "headQuestionId",
DROP COLUMN "interviewId";

-- CreateTable
CREATE TABLE "TailQuestion" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,
    "interviewId" INTEGER NOT NULL,

    CONSTRAINT "TailQuestion_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Interview_firstQuestionId_key" ON "Interview"("firstQuestionId");

-- AddForeignKey
ALTER TABLE "TailQuestion" ADD CONSTRAINT "TailQuestion_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TailQuestion" ADD CONSTRAINT "TailQuestion_interviewId_fkey" FOREIGN KEY ("interviewId") REFERENCES "Interview"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Interview" ADD CONSTRAINT "Interview_firstQuestionId_fkey" FOREIGN KEY ("firstQuestionId") REFERENCES "Question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
