import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getUsers(): any {
    return this.userService.get();
  }

  @Post()
  addUser(@Body() createUserDto: CreateUserDto){
    return this.userService.create(createUserDto);
  }

  @Get('/:userId')
  getUser(@Param('userId', ParseIntPipe) userId: number){
    return this.userService.getById(userId);
  }

  @Put('/:userId')
  updateUser(@Param('userId', ParseIntPipe) userId:number, @Body() updateUserDto: UpdateUserDto){
    return this.userService.update(userId, updateUserDto);
  }

  @Delete('/:userId')
  deleteUser(@Param('userId', ParseIntPipe) userId: number){
    return this.userService.delete(userId);
  }

}
