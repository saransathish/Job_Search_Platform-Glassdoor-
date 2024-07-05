import { Field, ObjectType } from "@nestjs/graphql";
import { ApiProperty } from '@nestjs/swagger';

@ObjectType()
export class Job {
    @Field()
    @ApiProperty()
    jobId: string;

    @Field()
    @ApiProperty()
    companyId: string;

    @Field()
    @ApiProperty()
    companyName: string;

    @Field()
    @ApiProperty()
    jobTitle: string;

    @Field({nullable : true})
    @ApiProperty()
    location: string;

    @Field()
    @ApiProperty()
    jobType: string;

    @Field()
    @ApiProperty({required:false})
    hasRemote?: boolean;

    @Field()
    @ApiProperty({required:false})
    easyApply?: boolean;

    @Field()
    @ApiProperty()
    published: Date;

    @Field()
    @ApiProperty()
    description: string;

    @Field()
    @ApiProperty()
    applicationUrl: string;

    @Field()
    @ApiProperty()
    language: string;

    @Field()
    @ApiProperty()
    clearanceRequired: boolean;

    @Field()
    @ApiProperty({required:false})
    salaryCurrency?: string;

    
    @Field()
    @ApiProperty()
    jobVacancies:number;
    
}