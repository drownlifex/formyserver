import { GalletaGuard } from './../../guard/galleta.guard';
import { SchemaGraphQl2 } from './schema.model';
import { Resolver, Query, Args } from "@nestjs/graphql";
import { UseGuards } from '@nestjs/common';


@Resolver(of => SchemaGraphQl2)

@UseGuards( new GalletaGuard())
export class ResolverGraphQl_X_2{

    @Query(returns => SchemaGraphQl2)
    secondsFunction( @Args("name" )  name: string){

        return {
            name: `Aloha ${name}`
        }

   }

}