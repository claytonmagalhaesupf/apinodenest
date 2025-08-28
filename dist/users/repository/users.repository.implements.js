"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRepositoryImplements = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../database/prisma.service");
let UsersRepositoryImplements = class UsersRepositoryImplements {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createUser(dto) {
        await this.prisma.user.create({
            data: {
                name: dto.name,
                email: dto.email
            }
        });
    }
    async getAllUsers() {
        const users = await this.prisma.user.findMany();
        return users;
    }
    async updateUser(id, dto) {
        await this.prisma.user.update({
            where: { id },
            data: {
                name: dto.name,
                email: dto.email
            }
        });
    }
    async deleteUser(id) {
        try {
            await this.prisma.user.delete({
                where: { id }
            });
        }
        catch (error) {
            throw new Error("Não foi possível excluir o usuário.");
        }
    }
};
exports.UsersRepositoryImplements = UsersRepositoryImplements;
exports.UsersRepositoryImplements = UsersRepositoryImplements = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersRepositoryImplements);
//# sourceMappingURL=users.repository.implements.js.map