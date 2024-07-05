import { Field, Int, ObjectType } from "@nestjs/graphql";
import { IsOptional } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

@ObjectType()
export class Community {
    @Field()
    @ApiProperty()
    id:number;
    
    @Field()
    @ApiProperty()
    bowl_name: string;

    @Field()
    @ApiProperty()
    info: string;

    @Field()
    @ApiProperty()
    icon: string;

    @Field()
    @IsOptional()
    @ApiProperty({ required: false })
    description?: string;

    @Field()
    @IsOptional()
    @ApiProperty({ required: false })
    image?:string;

    @Field()
    @ApiProperty()
    time: string;
}