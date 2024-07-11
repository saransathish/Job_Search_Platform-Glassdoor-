import { Field, InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

@InputType()
    export class NewComment{
        @Field()
        @IsNotEmpty()
        @ApiProperty()
        communityId :string;

        @Field()
        @IsNotEmpty()
        @ApiProperty()
        comment :string;



    }
