import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { Int } from '@nestjs/graphql';

@InputType()
export class DonationCreateInput {

    @Field(() => String, {nullable:false})
    @Validator.MinLength(3)
    displayName!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;

    @Field(() => String, {nullable:false})
    message!: string;

    @Field(() => Int, {nullable:false})
    amount!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
