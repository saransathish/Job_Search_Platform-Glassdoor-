import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyResolver } from './company.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CompanyController } from './company.controller';
import { ConfigModule } from '@nestjs/config';
import { S3Service } from './upload.service';

@Module({
  imports:[PrismaModule,ConfigModule.forRoot()],
  providers: [CompanyService, CompanyResolver,S3Service],
  controllers: [CompanyController]
})
export class CompanyModule {}
