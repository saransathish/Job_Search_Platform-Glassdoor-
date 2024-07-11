-- AlterTable
ALTER TABLE "CommunityPost" ADD COLUMN     "likesCount" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "UserData" ADD COLUMN     "likedPostsId" TEXT[];

-- CreateTable
CREATE TABLE "Comments" (
    "commentId" VARCHAR(36) NOT NULL,
    "userId" VARCHAR(36) NOT NULL,
    "commentFor" VARCHAR(255) NOT NULL,
    "commentContentId" VARCHAR(255) NOT NULL,

    CONSTRAINT "Comments_pkey" PRIMARY KEY ("commentId")
);

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "Comments_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserData"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
