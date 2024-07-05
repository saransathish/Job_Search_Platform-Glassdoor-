-- CreateTable
CREATE TABLE "User" (
    "userId" VARCHAR(36) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(128) NOT NULL,
    "username" VARCHAR(50) NOT NULL,
    "age" INTEGER,
    "yearsOfExperience" INTEGER,
    "preferredJobPosition" VARCHAR(100),
    "location" VARCHAR(100),
    "degree" VARCHAR(255),
    "university" VARCHAR(255),

    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "Job" (
    "jobId" VARCHAR(36) NOT NULL,
    "companyId" VARCHAR(36) NOT NULL,
    "companyName" VARCHAR(100) NOT NULL,
    "jobTitle" VARCHAR(255) NOT NULL,
    "location" VARCHAR(100) NOT NULL,
    "jobType" VARCHAR(50) NOT NULL,
    "hasRemote" BOOLEAN,
    "easyApply" BOOLEAN,
    "published" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT NOT NULL,
    "applicationUrl" VARCHAR(255) NOT NULL,
    "language" VARCHAR(50) NOT NULL,
    "clearanceRequired" BOOLEAN NOT NULL,
    "salaryCurrency" VARCHAR(10),
    "jobVacancies" INTEGER,

    CONSTRAINT "Job_pkey" PRIMARY KEY ("jobId")
);

-- CreateTable
CREATE TABLE "Company" (
    "companyId" VARCHAR(36) NOT NULL,
    "companyName" VARCHAR(100) NOT NULL,
    "companyWebsiteUrl" VARCHAR(255),
    "companyLinkedinUrl" VARCHAR(255),
    "rating" DOUBLE PRECISION,
    "iconUrl" VARCHAR(255),
    "location" VARCHAR(100) NOT NULL,
    "companySize" INTEGER NOT NULL,
    "industry" VARCHAR(50) NOT NULL,
    "description" VARCHAR(1000),

    CONSTRAINT "Company_pkey" PRIMARY KEY ("companyId")
);

-- CreateTable
CREATE TABLE "CommunityPost" (
    "communityId" VARCHAR(36) NOT NULL,
    "communityIcon" VARCHAR(256) NOT NULL,
    "communityName" VARCHAR(100) NOT NULL,
    "postTitle" VARCHAR(100) NOT NULL,
    "postContent" TEXT NOT NULL,
    "imageUrl" VARCHAR(255),
    "postedAt" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" VARCHAR(36) NOT NULL,

    CONSTRAINT "CommunityPost_pkey" PRIMARY KEY ("communityId")
);

-- CreateTable
CREATE TABLE "Review" (
    "reviewId" VARCHAR(36) NOT NULL,
    "rating" INTEGER NOT NULL,
    "reviewText" TEXT NOT NULL,
    "userId" VARCHAR(36) NOT NULL,
    "jobId" VARCHAR(36),
    "companyId" VARCHAR(36),
    "createdAt" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("reviewId")
);

-- CreateTable
CREATE TABLE "UserData" (
    "userDataId" VARCHAR(36) NOT NULL,
    "userId" VARCHAR(36) NOT NULL,
    "bookmarksJobsId" TEXT[],
    "bookmarksCompanyId" TEXT[],
    "pastSearchActivity" TEXT[],

    CONSTRAINT "UserData_pkey" PRIMARY KEY ("userDataId")
);

-- CreateTable
CREATE TABLE "Log" (
    "logId" VARCHAR(36) NOT NULL,
    "isLogin" BOOLEAN NOT NULL,
    "userEmail" VARCHAR(255) NOT NULL,

    CONSTRAINT "Log_pkey" PRIMARY KEY ("logId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "UserData_userId_key" ON "UserData"("userId");

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("companyId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "Job"("jobId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("companyId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserData" ADD CONSTRAINT "UserData_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Log" ADD CONSTRAINT "Log_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
