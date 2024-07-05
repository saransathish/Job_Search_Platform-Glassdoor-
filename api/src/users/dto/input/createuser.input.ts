import { Field, InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';
@InputType()
    export class CreateUserInput{
        @Field()
        @IsNotEmpty()
        @IsEmail()
        @ApiProperty()
        email: string;

        @Field()
        @IsNotEmpty()
        @IsString()
        @ApiProperty()
        username: string;

        @Field()
        @IsNotEmpty()
        @IsString()
        @ApiProperty()
        password: string;

        @Field()
        @IsOptional()
        @ApiProperty({ required: false })
        age:number;

        @Field()
        @IsOptional()
        @ApiProperty({ required: false })
        preferedProfession : string;

        @Field()
        @IsOptional()
        @ApiProperty({ required: false })
        location : string;

        @Field()
        @IsOptional()
        @ApiProperty({ required: false })
        yearsOfExperience : number;




    }
