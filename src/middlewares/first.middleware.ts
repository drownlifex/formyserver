import { AuthService } from './../services/auth/auth.service';
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { JwtService } from '@nestjs/jwt';
//import * as redis from "redis";



@Injectable()
export class FirstMiddleware implements NestMiddleware {
  // constructor(
  //   private jwtService: JwtService
  // ) {}
  constructor(private auth:AuthService){}
  use(req: Request , res: Response, next: () => void) {
    let db = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJKYWNrIiwicGFzc3dvcmQiOiIxMjM0NTYiLCJpYXQiOjE1OTk2ODQzNjZ9.KxNwP1YPnizGQ-0qVqcMx3zw_2waIcE93ZTpfhQmqmA";
    // const jwtService  = new JwtService({secret: "Secretpass"}    )
    // //console.log(jwtService.sign({username: "asda", }))
    // console.log(jwtService.decode(jwtService.sign({username: "asda", })))

    console.log(this.auth.generateToken("Jack", "123456"))





    // console.log(req.rawHeaders[11])
    
    // console.log(req.url)
  
    
    // const client = redis.createClient();
    
    // client.on("connect", function() {
    //   console.log("You are now connected");
    // });

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
      console.log(req.headers['x-forwarded-for'], req.connection.remoteAddress)
      next();


  }else{
      //console.log(req.headers["token"])
      // console.log(existInRedis( "token" , req.headers["token"]))
      res.send("No puede ingresar prrro!!")
      
    }

    //  console.log(req.connection.remoteAddress)
  }
}
