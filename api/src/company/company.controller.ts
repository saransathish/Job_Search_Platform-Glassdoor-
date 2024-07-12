import { Body, Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { CompanyService } from './company.service';
import { ApiConsumes, ApiTags } from '@nestjs/swagger';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { Company } from 'src/model/company';
import { GetPreferredCompanyLocation } from './dto/args/companylocation.args';
import { GetPreferredCompany } from './dto/args/companyname.args';
import { Job } from 'src/model/jobs';
import { companywithjobscombined } from './dto/args/createcompanywithjobs.args';
import { S3Service } from './upload.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('company')
@ApiTags('company')

export class CompanyController {


    constructor(
        private readonly companyservice:CompanyService,
        private readonly s3Service: S3Service

    ){}



    @Get('createcompany')
    @ApiOkResponse({ type: String })

    async initadd(){
        return this.companyservice.createcompany();
    }

    @Get()
    @ApiOkResponse({ type: [Company] })
    getallcompany(){
        return this.companyservice.getAllCompany();
    }

    @Post('companyByLocation')
    @ApiCreatedResponse({ type: [Company] })
    getCompanyByLocation(@Body() getpreferredcompanylocation:GetPreferredCompanyLocation): Promise<Company[]>{
        return this.companyservice.getCompanyByLocation(getpreferredcompanylocation)
    }

  @Post('createNewCompany')
  @ApiCreatedResponse({ type: Company })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('icon'))
  async createNewCompany(
    @Body() newCompanyData: Omit<Company, 'iconUrl'>,
    @UploadedFile() file: Express.Multer.File
        ): Promise<Company> {
    let iconUrl: string | null = null;

    if (file) {
      const key = await this.s3Service.uploadCompanyIcon(file);
      iconUrl = this.s3Service.getFileupload(key);
    }

    const companyData: Company = {
      ...newCompanyData,
      iconUrl,
    };

    return this.companyservice.createNewCompany(companyData);
  }

    @Post('companywithjobs')
    @ApiCreatedResponse({ type: Company })
    @ApiConsumes('multipart/form-data')
    @UseInterceptors(FileInterceptor('icon'))
    async createnewcompanyjobpost(@Body() newcompanyjobspost,
    @UploadedFile() file: Express.Multer.File

): Promise<Company>{
    let iconUrl: string | null = null;

    if (file) {
      const key = await this.s3Service.uploadCompanyIcon(file);
      iconUrl = this.s3Service.getFileupload(key);
    }
    const currentjob = {
        companyName:newcompanyjobspost.companyName,
        jobTitle:newcompanyjobspost.jobTitle,
        location:newcompanyjobspost.location,
        jobType:newcompanyjobspost.jobType,
        hasRemote:Boolean(newcompanyjobspost.hasRemote),
        easyApply:Boolean(newcompanyjobspost.easyApply) ,
        description:newcompanyjobspost.jobDescription,
        applicationUrl:newcompanyjobspost.applicationUrl,
        language:newcompanyjobspost.language,
        salaryCurrency:newcompanyjobspost.salaryCurrency,
        clearanceRequired:Boolean(newcompanyjobspost.clearanceRequired),
        jobVacancies:Number(newcompanyjobspost.jobVacancies),

    }
    const currentcompany = {
        companyName:newcompanyjobspost.companyName,
        companyWebsiteUrl:newcompanyjobspost.companyWebsiteUrl,
        companyLinkedinUrl:newcompanyjobspost.companyLinkedinUrl,
        rating:Number(newcompanyjobspost.rating),
        iconUrl:iconUrl,
        location:newcompanyjobspost.location,
        companySize:Number(newcompanyjobspost.companySize),
        industry:newcompanyjobspost.industry,
        description:newcompanyjobspost.description,
        

    }

    const companyData = {
        job:currentjob,
        company: currentcompany,
    }

        return this.companyservice.createnewcompanyjobpost(companyData)
    }

    @Post('createNewjobpost')
    @ApiCreatedResponse({ type: Job })
    createnewjobpost(@Body() newjobspost:Job): Promise<Job>{
        return this.companyservice.createnewjobpost(newjobspost)
    }
    

    @Post('companyByName')
    @ApiCreatedResponse({ type: [Company] })
    getCompanyByName(@Body() getpreferredcompany:GetPreferredCompany): Promise<Company[]>{
        return this.companyservice.getCompanyByName(getpreferredcompany)
    }



}
