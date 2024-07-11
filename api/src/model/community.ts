import { Field, Int, ObjectType } from "@nestjs/graphql";
import { IsOptional } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

@ObjectType()
export class Community {
    @Field()
    @ApiProperty()
    communityId:string;
    
    @Field()
    @ApiProperty()
    communityIcon: string;

    @Field()
    @ApiProperty()
    communityName: string;

    @Field()
    @ApiProperty()
    postTitle: string;

    @Field()
    @IsOptional()
    @ApiProperty()
    postContent: string;

    @Field()
    @IsOptional()
    @ApiProperty({ required: false })
    imageUrl?:string;

    @Field()
    @ApiProperty()
    postedAt: Date;

    @Field()
    @ApiProperty()
    userId: string;

    @Field()
    @ApiProperty()
    likesCount: number;
}