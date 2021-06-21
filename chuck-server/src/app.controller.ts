import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { AppService } from './app.service';
import { CreateUserDto } from './create-user.dto';
import { JokeModel } from './joke.model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  getRandomJoke(@Body() createUserDto: CreateUserDto): Promise<JokeModel> {
    return this.appService.getJoke(createUserDto);
  }

  @Get(':userId')
  getHistoryOfJokes(@Param('userId') userId: string) {
    return this.appService.getHistoryOfJokes(+userId);
  }
}
