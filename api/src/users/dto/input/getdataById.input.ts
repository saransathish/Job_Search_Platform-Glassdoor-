import { Field, InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

@InputType()
    export class GetUserDataById{
        @Field()
        @IsNotEmpty()
        @ApiProperty()
        userId: string;


    }
