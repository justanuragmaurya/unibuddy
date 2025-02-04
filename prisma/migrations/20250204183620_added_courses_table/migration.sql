-- CreateTable
CREATE TABLE "Courses" (
    "id" TEXT NOT NULL,
    "courseName" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,
    "semester" INTEGER NOT NULL,

    CONSTRAINT "Courses_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Courses_courseId_key" ON "Courses"("courseId");
