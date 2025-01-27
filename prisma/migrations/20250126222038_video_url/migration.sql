/*
  Warnings:

  - You are about to drop the column `videoId` on the `Interview` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[videoUrl]` on the table `Interview` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Interview" DROP CONSTRAINT "Interview_videoId_fkey";

-- DropIndex
DROP INDEX "Interview_videoId_key";

-- AlterTable
ALTER TABLE "Interview" DROP COLUMN "videoId",
ADD COLUMN     "videoUrl" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Interview_videoUrl_key" ON "Interview"("videoUrl");

-- AddForeignKey
ALTER TABLE "Interview" ADD CONSTRAINT "Interview_videoUrl_fkey" FOREIGN KEY ("videoUrl") REFERENCES "Video"("url") ON DELETE CASCADE ON UPDATE CASCADE;
