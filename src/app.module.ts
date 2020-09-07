import { ResolversGlobal } from './resolver/resolvers.module';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';


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
