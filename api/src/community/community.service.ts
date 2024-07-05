import { Injectable } from '@nestjs/common';
import { Commu_arry } from 'src/datas/community_array';
import { PrismaService } from 'src/prisma/prisma.service';
import { uuid } from 'uuidv4';


@Injectable()
export class CommunityService {

    constructor(private prisma:PrismaService){}


    async getallcommunityPost() {
        return this.prisma.prismaClient.communityPost.findMany({
        })
    }


      async  addingdata() {
        for (const post of Commu_arry) {
          const [id, communityName, postTitle,communityIcon, postContent, imageUrl, postedAt] = post;
      
          await this.prisma.prismaClient.communityPost.create({
            data: {
              communityName:communityName,
              communityIcon:communityIcon,
              postTitle:postTitle,
              postContent:postContent,
              imageUrl: imageUrl || null,
              postedAt: new Date() ,
              userId:uuid()
            },
          });
        }
        return 'success'
      }
      


}
