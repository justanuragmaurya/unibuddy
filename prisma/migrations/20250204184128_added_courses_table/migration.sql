/*
  Warnings:

  - You are about to drop the column `courseId` on the `Courses` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[courseCode]` on the table `Courses` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `courseCode` to the `Courses` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Courses_courseId_key";

-- AlterTable
ALTER TABLE "Courses" DROP COLUMN "courseId",
ADD COLUMN     "courseCode" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Courses_courseCode_key" ON "Courses"("courseCode");
