import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { GetPreferredLocation } from './dto/args/joblocation.args';
import { GetPreferredJob } from './dto/args/jobtitle.input';
import { uuid } from 'uuidv4';
import { Job } from 'src/model/jobs';

@Injectable()
export class JobsService {

    constructor(private prisma: PrismaService) { }


    async getAllJobs() {
        return this.prisma.prismaClient.job.findMany({
            include: {
                company: true
            }
        })
    }

    async jobSearchByLocation(getpreferredlocation: GetPreferredLocation): Promise<Job[]> {
        const jobs: Job[] = await this.prisma.prismaClient.job.findMany({
            where: {
                location: {
                    contains: getpreferredlocation.location,
                    mode: 'insensitive',
                }
            },
            include: {
                company: true
            }
        })

        return jobs
    }
    async jobSearchByTitle(getpreferredjob: GetPreferredJob): Promise<Job[]> {
        const jobs: Job[] = await this.prisma.prismaClient.job.findMany({
            where: {
                jobTitle: {
                    contains: getpreferredjob.jobTitle,
                    mode: 'insensitive',
                }
            },
            include: {
                company: true
            }
        })
        return jobs
    }
    // async updatejobsdata(){
    //     const fs = require('fs');
    //     const jobData = JSON.parse(fs.readFileSync('finaljobs.json', 'utf8'));
    //     console.log("upadting")
    //     for (const jo of jobData) {
    //         await this.prisma.prismaClient.job.create({
    //             data:{
    //                 companyId:uuid(),
    //                 companyName :jo.companyName,
    //                 iconUrl :jo.iconUrl,
    //                 jobTitle :jo.jobTitle,
    //                 location  :jo.location,
    //                 jobType  :jo.jobType,
    //                 hasRemote            :jo.hasRemote,
    //                 published             :jo.published,
    //                 description           :jo.description,
    //                 applicationUrl       :jo.applicationUrl,
    //                 language              :jo.language,
    //                 clearanceRequired    :jo.clearanceRequired,
    //                 salaryCurrency       :jo.salaryCurrency,
    //                 jobVacancies :jo.jobVacancies,
    //                 }
    //             }
    //         );
    //         console.log('Data added successfully');
    //     }
    //     return this.prisma.prismaClient.job.findMany({})
    // }

}
