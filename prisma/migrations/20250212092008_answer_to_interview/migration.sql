/*
  Warnings:

  - You are about to drop the column `interviewId` on the `Answer` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[firstAnswerId]` on the table `Interview` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Answer" DROP CONSTRAINT "Answer_interviewId_fkey";

-- AlterTable
ALTER TABLE "Answer" DROP COLUMN "interviewId";

-- AlterTable
ALTER TABLE "Interview" ADD COLUMN     "firstAnswerId" INTEGER NOT NULL DEFAULT 1;

-- CreateIndex
CREATE UNIQUE INDEX "Interview_firstAnswerId_key" ON "Interview"("firstAnswerId");

-- AddForeignKey
ALTER TABLE "Interview" ADD CONSTRAINT "Interview_firstAnswerId_fkey" FOREIGN KEY ("firstAnswerId") REFERENCES "Answer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
