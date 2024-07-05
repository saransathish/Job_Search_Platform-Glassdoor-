import { Controller, Get } from '@nestjs/common';
import { CommunityService } from './community.service';
import { ApiTags } from '@nestjs/swagger';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { Community } from 'src/model/community';

@Controller('community')
@ApiTags('community')
export class CommunityController {
    constructor(private readonly communityservice:CommunityService){}


    @Get()
    @ApiOkResponse({description:'Get all communities',type:Community})
    getallcommunityPost(){
        return this.communityservice.getallcommunityPost();
    }

    @Get('addcommunity')
    @ApiOkResponse({type:String})
    dataadding(){
        return this.communityservice.addingdata();
    }
    
}
