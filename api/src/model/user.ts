import { Field, Int, ObjectType } from "@nestjs/graphql";
import { ApiProperty } from '@nestjs/swagger';

@ObjectType()
export class User {
    @Field()
    @ApiProperty()
    userId: string;

    @Field()
    @ApiProperty()
    email: string;

    @Field()
    @ApiProperty()
    username: string;

    @Field()
    @ApiProperty()
    password: string;

    @Field()
    @ApiProperty({required:false})
    age?: number;

    @Field()
    @ApiProperty({required:false})
    yearsOfExperience? : number;

    @Field()
    @ApiProperty({required:false})
    preferredJobPosition?: string;

    @Field()
    @ApiProperty({required:false})
    location?: string;

    @Field()
    @ApiProperty({required:false})
    degree?: string;

    @Field()
    @ApiProperty({required:false})
    university?: string;
 
    @Field()
    @ApiProperty({required:false})
    resume?: string;

    @Field()
    @ApiProperty({required:false})
    image?: string;

}