import { Body, Controller, Get, Post } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { ApiTags } from '@nestjs/swagger';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { Job } from 'src/model/jobs';
import { GetPreferredLocation } from './dto/args/joblocation.args';
import { GetPreferredJob } from './dto/args/jobtitle.input';

@Controller('jobs')
@ApiTags('jobs')

export class JobsController {

    constructor(private readonly jobsservice:JobsService){}

    @Get()
    @ApiOkResponse({ type: [Job] })

    getAllJobs() {
        return this.jobsservice.getAllJobs();
    }

    @Post('jobsByLocation')
    @ApiOkResponse({ type: [Job] })    
    getJobByLocation(@Body() getpreferredlocation:GetPreferredLocation): Promise<Job[]>{
        return this.jobsservice.jobSearchByLocation(getpreferredlocation)
    }

    @Post('jobsByTitle')
    @ApiOkResponse({ type: [Job] }) 
    jobSearchByTitle(@Body() getpreferredjob:GetPreferredJob): Promise<Job[]>{
        return this.jobsservice.jobSearchByTitle(getpreferredjob)
    }


}
