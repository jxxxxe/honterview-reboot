-- AlterTable
ALTER TABLE "Question" ADD COLUMN     "headQuestionId" INTEGER;

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_headQuestionId_fkey" FOREIGN KEY ("headQuestionId") REFERENCES "Question"("id") ON DELETE SET NULL ON UPDATE CASCADE;
