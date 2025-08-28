import { CreateProfileDto } from 'src/dtos/create-profile-dto';
import { UpdateProfileDto } from 'src/dtos/update-profile-dto';
import { ProfilesRepository } from './repository/profiles.repository';
import { GetProfileDto } from 'src/dtos/get-profile-dto';
export declare class ProfilesController {
    private readonly repository;
    constructor(repository: ProfilesRepository);
    create(dto: CreateProfileDto): any;
    findOne(id: number): Promise<GetProfileDto>;
    update(id: number, dto: UpdateProfileDto): any;
}
