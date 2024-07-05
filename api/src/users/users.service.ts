import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '../model/user';
import { CreateUserInput } from './dto/input/createuser.input';
import { uuid } from 'uuidv4';
import { Userexist } from './dto/input/userexist.input';
import { Emailpass } from './dto/input/emailpass.input';
import { JobId } from './dto/input/jobid.input';
import { S3Service } from 'src/company/upload.service';



@Injectable()
export class UsersService {

    constructor(private prisma:PrismaService,
        private readonly s3Service: S3Service){}

    async createUser(createuserdata:CreateUserInput): Promise<User>{
        const newuser :User = {
            userId : uuid(),
            email: createuserdata.email,
            password:createuserdata.password,
            username:createuserdata.username,
            location:createuserdata.location,
            preferredJobPosition:createuserdata.preferedProfession,
            age:createuserdata.age,
            yearsOfExperience:createuserdata.yearsOfExperience
        }
        
        const user = await this.prisma.prismaClient.user.create({
            data :newuser
          });

          await this.prisma.prismaClient.userData.create({data:{
            userId:user.userId,
        }});

        await this.prisma.prismaClient.log.deleteMany();
        await this.prisma.prismaClient.log.create({data:{
            isLogin:true,
            userEmail:user.email
        }})

        return  user;
    }

    async getallusers():Promise<User[]> {
        return this.prisma.prismaClient.user.findMany({})
    }
    async getallbookmarks(){
        return this.prisma.prismaClient.userData.findMany({})
    }

    async userExists(userexist:Userexist):Promise<boolean | null>{
        
        const user = this.prisma.prismaClient.user.findUnique({where:{
            email:userexist.email,
        }})
        if( await(user) === null){
            return false;
          }

        await this.prisma.prismaClient.log.deleteMany();
        await this.prisma.prismaClient.log.create({data:{
            isLogin:true,
            userEmail:userexist.email
        }})
          
          return true;
    }
    async deleteallusers(){
        return this.prisma.prismaClient.user.deleteMany({})
    }

    async checkMailPassword(emailpass :Emailpass ){
        const user = await this.prisma.prismaClient.user.findUnique({where:{email:emailpass.email}})
        if( await(user) === null){
            return false;
          }
        if(await(user.password === emailpass.password)){
           await this.prisma.prismaClient.log.deleteMany();
            await this.prisma.prismaClient.log.create({data:{
            isLogin:true,
            userEmail:emailpass.email
        }})

            return true;
        }

        return false;}

        async getuserid(){
            const user = await this.prisma.prismaClient.log.findMany({include:{
                user:true
            }})
            const users = await(user[0])
            return users.user
        }

        async bookmark(){
            const id = this.getuserid()
            const jobsid = this.prisma.prismaClient.userData.findUnique({where:{
                userId:(await id).userId,
            }})
            const ids = (await jobsid).bookmarksJobsId
            return this.getJobsByIds(ids)
        }

        async  getJobsByIds(jobids: string[]) {
              const jobs = await this.prisma.prismaClient.job.findMany({
                where: {
                  jobId: {
                    in: jobids
                  },
                  
                },
                include:{
                    company:true
                }
              });
              return jobs;
            
        } 
        async bookmarkjobsid(){
            const id = this.getuserid()
            const userid = (await id).userId
            const data = this.prisma.prismaClient.userData.findUnique({
                where: {userId:userid},
                
            })
            return (await data).bookmarksJobsId
        }
        async addbookmark(jobid:JobId){
            const id = this.getuserid()
            const userid = (await id).userId
            return this.prisma.prismaClient.userData.update({
                where: {userId:userid},
                data:{bookmarksJobsId:{
                    push:jobid.jobId,
                }}
            })
        }
        async removeBookmark(jobid: JobId) {
            const id = this.getuserid();
            const userid = (await id).userId;
        
            return this.prisma.prismaClient.userData.update({
                where: { userId: userid },
                data: {
                    bookmarksJobsId: {
                        set: (await this.prisma.prismaClient.userData.findUnique({
                            where: { userId: userid },
                            select: { bookmarksJobsId: true },
                        })).bookmarksJobsId.filter((bookmarkId) => bookmarkId !== jobid.jobId),
                    },
                },
            });
        }

        async aboutUsers(){
            const id = this.getuserid();
            return id;
        }
        async updateusers(data:User){
            return this.prisma.prismaClient.user.update({
                where:{userId:data.userId},
                data:data
            })
        }
        async updateResume(resumeurl:string): Promise<User>{
            const id = this.getuserid()
            const userid = (await id).userId
            if ((await id).resume) {
                const urlParts = (await id).resume.split('/');
                const keyIndex = urlParts.findIndex(part => part === 'profile');
                const key = urlParts.slice(keyIndex).join('/');
                await this.s3Service.deleteFile(key);
              }
            return await this.prisma.prismaClient.user.update({
                where:{userId:userid},
                data:{resume:resumeurl}
            })
        }

        async updateImage(imageurl:string) : Promise<User>{
            const id = this.getuserid()
            const userid = (await id).userId
            if ((await id).image) {
                const urlParts = (await id).image.split('/');
                const keyIndex = urlParts.findIndex(part => part === 'profile');
                const key = urlParts.slice(keyIndex).join('/');
                await this.s3Service.deleteFile(key);
              }
            return await this.prisma.prismaClient.user.update({
                where:{userId:userid},
                data:{image:imageurl}
            })
        }
}
