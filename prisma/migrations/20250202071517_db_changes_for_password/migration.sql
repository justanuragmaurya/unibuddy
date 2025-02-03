-- AlterTable
ALTER TABLE "User" ADD COLUMN     "password" TEXT,
ALTER COLUMN "avatar" DROP NOT NULL;
