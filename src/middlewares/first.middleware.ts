import { AuthService } from './../services/auth/auth.service';
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { JwtService } from '@nestjs/jwt';

import { async } from 'rxjs';
import { RedisConectorService } from 'src/services/redis-conector/redis-conector.service';



@Injectable()
export class FirstMiddleware implements NestMiddleware {
  // constructor(
  //   private jwtService: JwtService
  // ) {}
  constructor(private auth:AuthService, private redis: RedisConectorService){}
  use(req: Request , res: Response, next: () => void) {
    let db = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJKYWNrIiwicGFzc3dvcmQiOiIxMjM0NTYiLCJpYXQiOjE1OTk2ODQzNjZ9.KxNwP1YPnizGQ-0qVqcMx3zw_2waIcE93ZTpfhQmqmA";
    // const jwtService  = new JwtService({secret: "Secretpass"}    )
   //console.log(jwtService.sign({username: "asda", }))
    // console.log(jwtService.decode(jwtService.sign({username: "asda", })))

    //onsole.log(this.auth.generateToken("Jack", "123456"))

    const execSync = require('child_process').execSync;
    execSync(' ufw deny from 201.254.174.115');
    if(req.headers["delete"]){
      execSync(' ufw delete 2');
      execSync('s');
    }
   
    //client.set("jack", "alsjdpaosidpaoisdp")

   
    //const getRedis = async(key) => await this.redis.redis(key);
    //const setRedis = async(key, value) => await client.set(key, value, redis.print);

    //console.log(getRedis(req.headers["get"]))
    //console.log(setRedis(req.headers["setkey"], req.headers["setvalue"]))
    

    // console.log(req.rawHeaders[11])
    
    // console.log(req.url)
  
    

    // const existInRedis = (clave: any, value: any):boolean =>{
    //   let temp = false;

    //   client.get(clave, function(err, reply) {
    //     if(reply === value){
    //       temp = true;
    //     }
    //   });

    //   return temp
    // }

    if(req.url !== "/"){
      res.send("KeKieresAserPrrrrrO ╭∩╮（︶_︶）╭∩╮")
    }else if (req.headers["tokenazo"] === db){
      //TOKEN req.headers["tokenazo"]
      //console.log(req.headers['x-forwarded-for'], req.connection.remoteAddress)
      next();


  }else{
      //console.log(req.headers["token"])
      // console.log(existInRedis( "token" , req.headers["token"]))
      res.send("No puede ingresar prrro!!")
      
    }

    //  console.log(req.connection.remoteAddress)
  }
}
