/*
  Warnings:

  - You are about to drop the `Comments` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Comments" DROP CONSTRAINT "Comments_userId_fkey";

-- DropTable
DROP TABLE "Comments";

-- CreateTable
CREATE TABLE "CommunityComments" (
    "commentId" VARCHAR(36) NOT NULL,
    "communityId" VARCHAR(36) NOT NULL,
    "userId" VARCHAR(36) NOT NULL,
    "commentContent" VARCHAR(255) NOT NULL,
    "postedAt" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CommunityComments_pkey" PRIMARY KEY ("commentId")
);

-- AddForeignKey
ALTER TABLE "CommunityComments" ADD CONSTRAINT "CommunityComments_communityId_fkey" FOREIGN KEY ("communityId") REFERENCES "CommunityPost"("communityId") ON DELETE RESTRICT ON UPDATE CASCADE;
