import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ){}

    async get():Promise<User[]>{
        return await this.userRepository.find();
    }

    async create(createUserDto: CreateUserDto){
        return await this.userRepository.save(createUserDto);
    }

    async getById(userId: number){
        return await this.userRepository.findOne({ where: {id: userId}});
    }

    async findByEmail(email: string){
        return await this.userRepository.findOne({where: {email: email}})
    }

    async update(userId: number, updateUserDto: UpdateUserDto){
        return await this.userRepository.update(userId, updateUserDto);
    }

    async delete(userId: number){
        return await this.userRepository.delete(userId);
    }
}
