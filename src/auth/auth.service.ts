import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto";
import * as argon from 'argon2';

@Injectable({})
export class AuthService {
    constructor(private prisma: PrismaService) {

    }

    login(dto: AuthDto){
        return {
            email: 'sme@gmail.com'
        }
    }

    async signup(dto: AuthDto){
        // Hash password
        const hash = await argon.hash(dto.password)

        // Save user to DB
        const user = await this.prisma.user.create({
            data: {
                email: dto.email,
                hash, 
            }
        })

        delete user.hash

        return user
    }
}