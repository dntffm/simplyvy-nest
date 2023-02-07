import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto";
export declare class AuthService {
    private prisma;
    constructor(prisma: PrismaService);
    login(dto: AuthDto): {
        email: string;
    };
    signup(dto: AuthDto): Promise<import(".prisma/client").User>;
}
