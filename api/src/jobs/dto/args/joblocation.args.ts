import { Field, InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

@InputType()
    export class GetPreferredLocation{
        @Field()
        @IsNotEmpty()
        @ApiProperty()

        location :string;


    }
