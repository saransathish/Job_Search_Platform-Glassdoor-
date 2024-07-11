import { Body, Controller, Delete, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserInput } from './dto/input/createuser.input';
import { User } from '../model/user';
import { Userexist } from './dto/input/userexist.input';
import { Emailpass } from './dto/input/emailpass.input';
import { ApiConsumes, ApiTags } from '@nestjs/swagger';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { Job } from 'src/model/jobs';
import { JobId } from './dto/input/jobid.input';
import { FileInterceptor } from '@nestjs/platform-express';
import { S3Service } from 'src/company/upload.service';
import { promises } from 'dns';
import { UserData } from '@prisma/client';


@Controller('users')
@ApiTags('users')

export class UsersController {

    constructor(
      private userservice: UsersService,
      private readonly s3Service: S3Service  ) {}

    @Get()
    @ApiCreatedResponse({ type: [User] })
    findAll(){
        return this.userservice.getallusers();
    }

    // @Get('bookmark')
    // @ApiCreatedResponse({ type:  })
    // bookmark(){
    //     return this.userservice.getallbookmarks();
    // }
    @Post()
    @ApiCreatedResponse({ type: User })
    async createUser(@Body() createUser: CreateUserInput) {
      return this.userservice.createUser(createUser);
    }


    @Post('exists')
    @ApiOkResponse({ type: Boolean })
    async userExists(@Body() userexit: Userexist): Promise<boolean> {
      return this.userservice.userExists(userexit);
      
    }

    @Delete()
    @ApiOkResponse({type:Number})
    async deleteallusers(){
        return this.userservice.deleteallusers();
    }

    @Post('emailpassword')
    @ApiOkResponse({ type: Boolean })
    async checkMailPassword(@Body() emailpass:Emailpass){
    const out= this.userservice.checkMailPassword(emailpass);
    return out;
  }

  @Post('addbookmark')
    @ApiOkResponse({ type: Boolean })
    async addbookmark(@Body() jobid:JobId){
    return this.userservice.addbookmark(jobid);
  }

  @Post('removebookmark')
    @ApiOkResponse({ type: Boolean })
    async removebookmark(@Body() jobid:JobId){
    return this.userservice.removeBookmark(jobid);
  }

  @Get('userjobsbookmark')
  @ApiOkResponse({ type: [Job] })
  async userjobsbookmark(){
    return this.userservice.bookmark();
  }

  @Get('bookmarkjobsid')
  @ApiOkResponse({ type: [String] })
  async bookmarkjobsid(){
    return this.userservice.bookmarkjobsid();
  }
  @Get('aboutUsers')
  @ApiOkResponse({ type: User })
  async aboutUsers(){
    return this.userservice.aboutUsers();
  }
  @Get('UsersDatas')
  @ApiOkResponse({ })
  async UsersDatas():Promise<UserData[]>{
    return this.userservice.UsersDatas();
  }

  @Post('updateuser')
  @ApiOkResponse({ type: User })
  async updateusers(@Body() data:User){
    return this.userservice.updateusers(data);
  }

  @Post('updateresume')
  @ApiCreatedResponse({ type: User })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('file'))
  async updateResume(
    @UploadedFile() file: Express.Multer.File
        ) :Promise<User> {
    let resumeUrl: string | null = null;

    if (file) {
      const key = await this.s3Service.uploadFile(file);
      resumeUrl = this.s3Service.getFileupload(key);
    }
    return this.userservice.updateResume(resumeUrl)
  }

  @Post('updateimage')
  @ApiCreatedResponse({ type: User })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('file'))
  async updateImage(
    @UploadedFile() file: Express.Multer.File
        ):Promise<User> {
    let imageurl: string | null = null;

    if (file) {
      const key = await this.s3Service.uploadFile(file);
      imageurl = this.s3Service.getFileupload(key);
    }
    return this.userservice.updateImage(imageurl)
  }


}
