import { Injectable } from '@nestjs/common';
import * as redis from "redis";
@Injectable()
export class RedisConectorService {
    // const client = redis.createClient();   

    // client.on("connect", function() {
    //   console.log("You are now connected");
    // });
    redis(dto:string):string{
        return redis.createClient().on("connect", function() {
               console.log("You are now connected");
             }).get(dto, redis.print);
    }

}
