import { Body, Controller, Get, Post } from '@nestjs/common';
import { CommunityService } from './community.service';
import { ApiTags } from '@nestjs/swagger';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { Community } from 'src/model/community';
import { CommunityID } from './dto/args/likepost.args';
import { NewComment } from './dto/args/comment.args';

@Controller('community')
@ApiTags('community')
export class CommunityController {
    constructor(private readonly communityservice:CommunityService){}
    @Get()
    @ApiOkResponse({description:'Get all communities',type:Community})
    getallcommunityPost():Promise<Community[]>{
        return this.communityservice.getallcommunityPost();
    }
    @Get('addcommunitydata')
    @ApiOkResponse({description:'add communities',type:String})
    async addcommu(){
        return this.communityservice.addingdata();
    }

    @Get('userLikes')
    @ApiOkResponse({description:'Get all communities',type:[String]})
    userLikes():Promise<String[]>{
        return this.communityservice.userLikes();
    }
    @Post('likecommunitypost')
    @ApiOkResponse({type:Community})
    AddlikeCommunityPost(@Body() communityid:CommunityID):Promise<Community>{
        return this.communityservice.likeCommunityPost(communityid);
    }
    @Post('removecommunitypost')
    @ApiOkResponse({type:Community})
    RemovelikeCommunityPost(@Body() communityid:CommunityID):Promise<Community>{
        return this.communityservice.removelikeCommunityPost(communityid);
    }

    @Post('addcomment')
    @ApiOkResponse({type:Community})
    async addComments(@Body() newcomment:NewComment){
        await this.communityservice.addComments(newcomment);
        return this.getallcommunityPost()
    }
    @Get('removedatacomment')
    @ApiOkResponse({type:String})
    removedatas(){
        return this.communityservice.removedatas();
    }

    @Get('removedatacommunity')
    @ApiOkResponse({type:String})
    removedata(){
        return this.communityservice.removedatas2();
    }
}
