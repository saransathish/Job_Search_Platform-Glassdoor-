import { Module } from '@nestjs/common';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UsersController } from './users.controller';
import { S3Service } from 'src/company/upload.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports:[PrismaModule,ConfigModule.forRoot()],
  providers: [UsersResolver, UsersService,S3Service],
  controllers: [UsersController]
})
export class UsersModule {}
