import { CreateUserDTO } from "src/dtos/create-user-dto";
import { UsersRepository } from "./users.repository";
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma.service";

@Injectable()
export class UsersRepositoryImplements implements UsersRepository {

    constructor(private prisma: PrismaService) { }

    async createUser(dto: CreateUserDTO): Promise<void> {
        await this.prisma.user.create({
            data: {
                name: dto.name,
                email: dto.email
            }
        })

    }
    async getAllUsers(): Promise<CreateUserDTO[]> {
        const users = await this.prisma.user.findMany();
        return users;
    }

    async updateUser(id: number, dto: CreateUserDTO): Promise<void> {
        await this.prisma.user.update({
            where: { id },
            data: {
                name: dto.name,
                email: dto.email
            }
        });

    }

    async deleteUser(id: number): Promise<void> {
        try {
            await this.prisma.user.delete({
                where: { id }
            });
        } catch (error) {
            throw new Error("Não foi possível excluir o usuário.")
        }

    }

}
