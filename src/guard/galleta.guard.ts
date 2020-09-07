import { IncomingMessage } from 'http';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class GalletaGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    const header: IncomingMessage = context.getArgByIndex(2)["req"];

    // console.log(header.url)
    // if(header.url !== "/"){
    //   console.log("Ke keremos aser??????????")
    // }
    // console.log(header.headers)





    if(context.getArgByIndex(1).name === "JACK"){
      context.getArgByIndex(1).name = `${context.getArgByIndex(1).name} @Esto es una galleta` 
      return true
    }
    return false;
  }
}
