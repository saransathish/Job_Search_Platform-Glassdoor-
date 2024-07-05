import { Field, InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

@InputType()
    export class JobId{
        @Field()
        @IsNotEmpty()
        @ApiProperty()
        jobId: string


    }
