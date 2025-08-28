import { CreateUserDTO } from 'src/dtos/create-user-dto';
import { UsersRepository } from './repository/users.repository';
import express from 'express';
export declare class UsersController {
    private repository;
    constructor(repository: UsersRepository);
    create(body: CreateUserDTO): Promise<void>;
    findAll(): Promise<CreateUserDTO[]>;
    update(id: number, body: CreateUserDTO): Promise<void>;
    delete(id: number, response: express.Response): Promise<any>;
}
