import { PruebaInterceptor } from './../../interceptors/prueba.interceptor';
import { UppercasePipe } from './../../pipes/uppercase.pipe';
import { SchemaGraphQl } from './schema.model';
import { Resolver, Query, Args } from "@nestjs/graphql";
import { UseInterceptors } from '@nestjs/common';


@Resolver(of => SchemaGraphQl)
@UseInterceptors(new PruebaInterceptor())
export class ResolverGraphQl{

    @Query(returns => SchemaGraphQl)
    firstFunction( @Args("id", new UppercasePipe() )  id: string){

        return {
            id: `Aloha ${id}`
        }

   }

}