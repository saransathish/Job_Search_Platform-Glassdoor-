import { Args, Query, Resolver } from '@nestjs/graphql';
import { JobsService } from './jobs.service';
import { Job } from 'src/model/jobs';
import { GetPreferredLocation } from './dto/args/joblocation.args';
import { GetPreferredJob } from './dto/args/jobtitle.input';

@Resolver()
export class JobsResolver {
    constructor(private readonly jobsservice:JobsService){}

    @Query(() => [Job])
    getAllJobs() {
        return this.jobsservice.getAllJobs();
    }


    // @Query(() => [Job])
    // getJobByLocation(@Args('getpreferredlocation') getpreferredlocation:GetPreferredLocation): Promise<Job[]>{
    //     return this.jobsservice.jobSearchByLocation(getpreferredlocation)
    // }

    // @Query(() => [Job])
    // jobSearchByTitle(@Args('getpreferredjob') getpreferredjob:GetPreferredJob): Promise<Job[]>{
    //     return this.jobsservice.jobSearchByTitle(getpreferredjob)
    // }

    // @Query(() => [Job])
    // updatejobsdata():Promise<Job[]>{
    //     return this.jobsservice.updatejobsdata();
    // }
}
