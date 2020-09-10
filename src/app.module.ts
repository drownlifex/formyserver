import { ResolversGlobal } from './resolver/resolvers.module';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
//import { JwtModule } from '@nestjs/jwt';
//import { AuthService } from './services/auth/auth.service';
//import { RedisConectorService } from './services/redis-conector/redis-conector.service';


@Module({
  imports: [
    
    ResolversGlobal,
    GraphQLModule.forRoot({
      autoSchemaFile: "schema.gql",
      // debug: false,
      playground: false,
      path: "api"

    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
