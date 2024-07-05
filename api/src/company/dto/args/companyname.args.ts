import { Field, InputType } from "@nestjs/graphql";
import {  IsNotEmpty } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

@InputType()
    export class GetPreferredCompany{
        @Field()
        @IsNotEmpty()
        @ApiProperty()

        companyName :string;


    }
