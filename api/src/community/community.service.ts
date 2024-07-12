import { Injectable } from '@nestjs/common';
import { Commu_arry } from 'src/datas/community_array';
import { PrismaService } from 'src/prisma/prisma.service';
import { uuid } from 'uuidv4';
import { Community } from 'src/model/community';
import { CommunityID } from './dto/args/likepost.args';
import { NewComment } from './dto/args/comment.args';


@Injectable()
export class CommunityService {

  constructor(private prisma: PrismaService,
  ) { }


  async getallcommunityPost() {
    return this.prisma.prismaClient.communityPost.findMany({
      include:{comment:true}
    })
  }


  async addingdata() {
    for (const post of Commu_arry) {
      const [id, communityName, postTitle, communityIcon, postContent, imageUrl, postedAt] = post;

      await this.prisma.prismaClient.communityPost.create({
        data: {
          communityName: communityName,
          communityIcon: communityIcon,
          postTitle: postTitle,
          postContent: postContent,
          imageUrl: imageUrl || null,
          postedAt: new Date(),
          userId: uuid()
        },
      });
    }
    return 'success'
  }

  async likeCommunityPost(communityId: CommunityID):Promise<Community> {
    const user = await this.getusers()

    const users = await (user[0])
    const user_id = users.user.userId
    await this.prisma.prismaClient.userData.update({
      where: { userId: user_id },
      data: {
        likedPostsId: {
          push: communityId.communityId,
        }
      }
    });
    return await this.prisma.prismaClient.communityPost.update({ where: { communityId: communityId.communityId }, data: { likesCount: { increment: 1 } } })


  }
  async getusers(){
    const user = await this.prisma.prismaClient.log.findMany({
      include: {
        user: true
      }
    })
    return user
  }
  async removelikeCommunityPost(communityId: CommunityID):Promise<Community> {
    const user = await this.getusers()
    const users = await (user[0])
    const user_id = users.user.userId

    await this.prisma.prismaClient.userData.update({
      where: { userId: user_id },
      data: {
        likedPostsId: {
          set: (await this.prisma.prismaClient.userData.findUnique({
            where: { userId: user_id },
            select: { likedPostsId: true },
          })).likedPostsId.filter((commentid) => commentid !== communityId.communityId),
        },
      },
    });
  return await this.prisma.prismaClient.communityPost.update({ where: { communityId: communityId.communityId }, data: { likesCount: { decrement: 1 } } })

  }

  async userLikes(){
    const user = await this.getusers()
    const users = await (user[0])
    const user_id = users.user.userId
    const likes = await this.prisma.prismaClient.userData.findUnique({where:{userId:user_id}})
    return likes.likedPostsId
  }

  async addComments(communityid:NewComment){
    const user = await this.getusers()
    const users = await (user[0])
    const user_id = users.user.userId
    await this.prisma.prismaClient.communityComments.create({data:{
      communityId:communityid.communityId,
      commentContent:communityid.comment,
      userId:user_id
    }})
    return 
    

  }
  async removedatas(){
    await this.prisma.prismaClient.communityComments.deleteMany({})
    return 'sucess'
  }
  async removedatas2(){
    await this.prisma.prismaClient.communityPost.deleteMany({})
    return 'sucess'
  }
  

     


}
