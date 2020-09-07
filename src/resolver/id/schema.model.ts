import {ObjectType, Field} from '@nestjs/graphql';

@ObjectType()
export class SchemaGraphQl{

    @Field(type => String)
    id: string;

}