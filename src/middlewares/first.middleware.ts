import { Injectable, NestMiddleware } from '@nestjs/common';
import { IncomingMessage, ServerResponse } from 'http';
import { Request, Response } from 'express';



@Injectable()
export class FirstMiddleware implements NestMiddleware {
  use(req: Request , res: Response, next: () => void) {
    // console.log(req.rawHeaders[11])
    
    // console.log(req.url)



    if(req.url !== "/"){
      res.send("KeKieresAserPrrrrrO ╭∩╮（︶_︶）╭∩╮")
    }else{
      console.log(req.headers)
      next();
      
    }

    //  console.log(req.connection.remoteAddress)
  }
}
