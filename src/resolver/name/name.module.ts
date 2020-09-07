import { FirstMiddleware } from './../../middlewares/first.middleware';
import { ResolverGraphQl_X_2 } from './resolver';

import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';

@Module({

    imports: [ResolverGraphQl_X_2],

})
export class Name implements NestModule{

    configure(consumer: MiddlewareConsumer){
        consumer.apply(FirstMiddleware).forRoutes('*')
    }
};