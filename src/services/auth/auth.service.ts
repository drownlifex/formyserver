import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService){}
    
    generateToken(userId: string, password: string){
        return this.jwtService.sign({
            userId,
            password
        })

        
    }
}
