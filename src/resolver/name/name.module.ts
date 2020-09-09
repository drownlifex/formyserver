import { FirstMiddleware } from './../../middlewares/first.middleware';
import { ResolverGraphQl_X_2 } from './resolver';

import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AuthService } from 'src/services/auth/auth.service';
import { JwtModule } from '@nestjs/jwt';

@Module({

    imports: [
        JwtModule.register({ secret: 'hard!to-guess_secret' }),
        ResolverGraphQl_X_2
    ],
    providers: [AuthService]

})
export class Name implements NestModule{

    configure(consumer: MiddlewareConsumer){
        consumer.apply(FirstMiddleware).forRoutes('*')
    }
};