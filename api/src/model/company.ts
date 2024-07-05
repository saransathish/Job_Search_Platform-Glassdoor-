import { Field, Float, ObjectType } from "@nestjs/graphql";
import { ApiProperty } from '@nestjs/swagger';


@ObjectType()
export class Company {
    @Field()
    @ApiProperty()
    companyId: string;

    @Field()
    @ApiProperty()
    companyName: string;

    @Field({nullable : true})
    @ApiProperty({nullable:true,required:false})
    companyWebsiteUrl?: string;

    @Field({nullable : true})
    @ApiProperty({nullable:true,required:false})
    companyLinkedinUrl?: string;

    @Field(type => Float)
    @ApiProperty()
    rating?: number;

    @Field({nullable : true})
    @ApiProperty({nullable:true,required:false})
    iconUrl?: string;

    @Field()
    @ApiProperty()
    location: string;

    @Field()
    @ApiProperty()
    companySize: number;

    @Field()
    @ApiProperty()
    industry: string;

    @Field()
    @ApiProperty({required:false})
    description?: string;
    
    
    
}