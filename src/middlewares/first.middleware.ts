import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import * as redis from "redis";


@Injectable()
export class FirstMiddleware implements NestMiddleware {
  use(req: Request , res: Response, next: () => void) {
    // console.log(req.rawHeaders[11])
    
    // console.log(req.url)
  
    
    const client = redis.createClient();
    
    client.on("connect", function() {
      console.log("You are now connected");
    });

    const existInRedis = (clave: any, value: any):boolean =>{
      let temp = false;

      client.get(clave, function(err, reply) {
        if(reply === value){
          temp = true;
        }
      });

      return temp
    }

    if(req.url !== "/"){
      res.send("KeKieresAserPrrrrrO ╭∩╮（︶_︶）╭∩╮")
    }else{
      console.log(req.headers["token"])
      // console.log(existInRedis( "token" , req.headers["token"]))
      next();
      
    }

    //  console.log(req.connection.remoteAddress)
  }
}
