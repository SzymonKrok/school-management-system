import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Res,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { Response } from 'express';


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll(@Res() res: Response, @Query('page') page: number = 1, @Query('limit') limit: number = 10) {
    const [users, total] = await this.usersService.findAll({ page, limit });


    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + users.length - 1; // users.length: ile faktycznie zwróconych
    res.set('Content-Range', `users ${startIndex}-${endIndex}/${total}`);
    res.set('Access-Control-Expose-Headers', 'Content-Range');

    return res.json(users);

  }


  @Get(':id')
  findOne(@Param('id') id: number): Promise<User> {
    return this.usersService.findOne(id);
  }

  @Post()
  create(@Body() userData: Partial<User>): Promise<User> {
    return this.usersService.create(userData);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() userData: Partial<User>): Promise<User> {
    return this.usersService.update(id, userData);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.usersService.remove(id);
  }
}
