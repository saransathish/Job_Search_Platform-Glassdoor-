import { Module } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { JobsResolver } from './jobs.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JobsController } from './jobs.controller';

@Module({
  imports:[PrismaModule],
  providers: [JobsService, JobsResolver],
  controllers: [JobsController]
})
export class JobsModule {}
