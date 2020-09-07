import { Name } from './../resolver/name/name.module';
import { Module } from "@nestjs/common";
import { Id } from './id/id.module';


@Module({
    imports:[
        Name,
        Id
    ]
})
export class ResolversGlobal{}