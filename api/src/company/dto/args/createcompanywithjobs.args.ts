import { Field, InputType } from "@nestjs/graphql";
import {  IsNotEmpty } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';
import { Job } from "src/model/jobs";
import { Company } from "src/model/company";

@InputType()
    export class companywithjobscombined{
        @Field()
        @ApiProperty()
        job :Job

        @Field()
        @ApiProperty()
        company :Company



    }
