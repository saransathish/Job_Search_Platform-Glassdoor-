import { Field, InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

@InputType()
    export class Emailpass{
        @Field()
        @IsNotEmpty()
        @IsEmail()
        @ApiProperty()
        email: string;

        @Field()
        @IsNotEmpty()
        @IsString()
        @ApiProperty()
        password: string;


    }
