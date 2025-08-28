import { CreateUserDTO } from "src/dtos/create-user-dto";
import { UsersRepository } from "./users.repository";
import { PrismaService } from "src/database/prisma.service";
export declare class UsersRepositoryImplements implements UsersRepository {
    private prisma;
    constructor(prisma: PrismaService);
    createUser(dto: CreateUserDTO): Promise<void>;
    getAllUsers(): Promise<CreateUserDTO[]>;
    updateUser(id: number, dto: CreateUserDTO): Promise<void>;
    deleteUser(id: number): Promise<void>;
}
