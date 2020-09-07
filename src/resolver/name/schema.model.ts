import {ObjectType, Field} from '@nestjs/graphql';

@ObjectType()
export class SchemaGraphQl2{

    @Field(type => String)
    name: string;

}