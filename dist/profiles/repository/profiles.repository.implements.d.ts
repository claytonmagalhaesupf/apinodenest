import { PrismaService } from "src/database/prisma.service";
import { ProfilesRepository } from "./profiles.repository";
import { UpdateProfileDto } from "src/dtos/update-profile-dto";
import { CreateProfileDto } from "src/dtos/create-profile-dto";
import { GetProfileDto } from "src/dtos/get-profile-dto";
export declare class ProfilesRepositoryImplements implements ProfilesRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateProfileDto): Promise<void>;
    findOne(id: number): Promise<GetProfileDto>;
    update(id: number, dto: UpdateProfileDto): Promise<void>;
}
