import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {

    get(){
        return [{name: 'Nane',email:'nane@gmail.com'}];
    }

    create(createUserDto: CreateUserDto){
        return createUserDto;
    }

    getById(userId: number){
        return userId;
    }

    update(userId: number, updateUserDto: UpdateUserDto){
        return {
            userId: userId,
            updateUserDto
          }
    }

    delete(userId: number){
        return userId;
    }
}
