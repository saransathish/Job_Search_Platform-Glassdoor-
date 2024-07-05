import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { GetPreferredCompanyLocation } from './dto/args/companylocation.args';
import { GetPreferredCompany } from './dto/args/companyname.args';
import { Company } from 'src/model/company';
import { Job } from 'src/model/jobs';
import { companywithjobscombined } from './dto/args/createcompanywithjobs.args';
import { S3Service } from './upload.service';

@Injectable()
export class CompanyService {

    constructor(private prisma:PrismaService,
        private readonly s3Service: S3Service

    ){}

    async createNewCompany(newcompanydata:Company) {
        return this.prisma.prismaClient.company.create({data:{
            ...newcompanydata,
            rating:Number(newcompanydata.rating),
            companySize:Number(newcompanydata.companySize)
        }})

    }

    async getAllCompany() {
        return this.prisma.prismaClient.company.findMany({
            include:{
                jobs:true
            }
            
        })
    }


    async getcompany(name: string) {
        const company = await this.prisma.prismaClient.company.findMany({
          where: {
            companyName: {
              contains: name,
              mode: 'insensitive'
            }
          }
        });
        return company[0];
      }

    async createnewjobpost(jobspost:Job){
        const comp = this.getcompany(jobspost.companyName)
            
            if( (await comp)){
                const id = await((await comp).companyId);
                console.log('if');        
                return this.prisma.prismaClient.job.create({data:{
            companyId:id,
            ...jobspost,
        }});
    }
    else{
        return this.prisma.prismaClient.job.create({data:{
            companyId:'ccbf4358-f582-4644-a2c0-6f15baadbf80',
            ...jobspost,
        }})
    }
}

    async createnewcompanyjobpost(newcompanyjobspost){
        console.log(newcompanyjobspost)
        const newCompany = await this.prisma.prismaClient.company.create({
            data: {
                ...newcompanyjobspost.company,
            }
        });

        const job = await this.prisma.prismaClient.job.create({
            data: {
              companyId: newCompany.companyId,

              ...newcompanyjobspost.job
            },
          });

          return newCompany
    } 


    

    async createcompany(){
        const fs = require('fs');
        const companyData = JSON.parse(fs.readFileSync('day4_7.json', 'utf8'));
        for (const company of companyData) {
            const comp = this.getcompany(company.companyName)
            
            if( (await comp)){
                const id = await((await comp).companyId);
                console.log('if');
                const job = await this.prisma.prismaClient.job.create({
                    data: {
                      companyId: id,
                      companyName: company.companyName,
                      jobTitle: company.jobTitle,
                      location: company.location,
                      jobType: company.jobType,
                      hasRemote: company.hasRemote,
                      easyApply:company.easyApply,
                      published: company.published,
                      description: company.description,
                      applicationUrl: company.applicationUrl,
                      language: company.language,
                      clearanceRequired: company.clearanceRequired,
                      salaryCurrency: company.salaryCurrency,
                      jobVacancies: company.jobVacancies,
                    },
                  });
            }
            else{
                console.log('else');
                const name = company.iconUrl;
                const imageName = name.substring(name.lastIndexOf('/') + 1);
                console.log(imageName);
                const url = await this.s3Service.uploadFileByUrl(company.iconUrl,imageName)
                const urlpath = await this.s3Service.getFileUrl(url)
                const newCompany = await this.prisma.prismaClient.company.create({
                    data: {
                        companyName: company.companyName,
                        companyWebsiteUrl:company.companyWebsiteUrl,
                        companyLinkedinUrl:company.companyLinkedinUrl,
                        rating:company.companyRating,
                        iconUrl:urlpath,
                        location:company.companyLocation,
                        companySize:company.companySize,
                        industry:company.industry,
                        description:company.companyDescription
                    }
                });

                const job = await this.prisma.prismaClient.job.create({
                    data: {
                      companyId: newCompany.companyId,
                      companyName: company.companyName,
                      jobTitle: company.jobTitle,
                      location: company.location,
                      jobType: company.jobType,
                      hasRemote: company.hasRemote,
                      easyApply:company.easyApply,
                      published: company.published,
                      description: company.description,
                      applicationUrl: company.applicationUrl,
                      language: company.language,
                      clearanceRequired: company.clearanceRequired,
                      salaryCurrency: company.salaryCurrency,
                      jobVacancies: company.jobVacancies,
                    },
                  });
            }

        }
        return "success"
    }

    async getCompanyByLocation(getpreferredcompanylocation:GetPreferredCompanyLocation):Promise<Company[]> {
        const companies :Company[] = await this.prisma.prismaClient.company.findMany({
            where:{
                location:{
                    contains:getpreferredcompanylocation.location,
                    mode: 'insensitive',
                }
                
            }
            ,include:{
                jobs:true
            }
        })

        return companies

    }

    async getCompanyByName(getpreferredcompany:GetPreferredCompany):Promise<Company[]> {
        const companies :Company[] = await this.prisma.prismaClient.company.findMany({
            where:{
                companyName:{
                    contains:getpreferredcompany.companyName,
                    mode: 'insensitive',
                }
            }
            ,include:{
                jobs:true
            }
        })

        return companies

    }




}
