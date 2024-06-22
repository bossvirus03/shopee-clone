-- CreateEnum
CREATE TYPE "UserType" AS ENUM ('ADMIN', 'USER', 'SHOP');

-- CreateTable
CREATE TABLE "Merchandise" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "sale" DOUBLE PRECISION,
    "images" JSONB NOT NULL,
    "categories" TEXT NOT NULL,
    "shopId" INTEGER NOT NULL,

    CONSTRAINT "Merchandise_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Review" (
    "id" SERIAL NOT NULL,
    "merchandiseId" INTEGER NOT NULL,
    "comment" TEXT NOT NULL,
    "star" INTEGER NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT,
    "email" TEXT NOT NULL,
    "type" "UserType" NOT NULL DEFAULT 'USER',
    "avatarUrl" TEXT,
    "isShop" BOOLEAN,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Credential" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Credential_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Shop" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "avatarUrl" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Shop_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Credential_userId_key" ON "Credential"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Credential_username_key" ON "Credential"("username");

-- AddForeignKey
ALTER TABLE "Merchandise" ADD CONSTRAINT "Merchandise_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "Shop"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_merchandiseId_fkey" FOREIGN KEY ("merchandiseId") REFERENCES "Merchandise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Credential" ADD CONSTRAINT "Credential_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shop" ADD CONSTRAINT "Shop_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
