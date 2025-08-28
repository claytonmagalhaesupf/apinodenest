import { CreateProfileDto } from "src/dtos/create-profile-dto";
import { GetProfileDto } from "src/dtos/get-profile-dto";
import { UpdateProfileDto } from "src/dtos/update-profile-dto";
export declare abstract class ProfilesRepository {
    abstract create(dto: CreateProfileDto): any;
    abstract findOne(id: number): Promise<GetProfileDto>;
    abstract update(id: number, dto: UpdateProfileDto): any;
}
