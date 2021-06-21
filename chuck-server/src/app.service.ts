import { Injectable } from '@nestjs/common';

import { AgentService } from './agent.service';
import { CreateUserDto } from './create-user.dto';
import { JokeModel } from './joke.model';
import { UserService } from './user.service';

@Injectable()
export class AppService {
  constructor(
    private readonly agentService: AgentService,
    private readonly userService: UserService,
  ) {}

  async getJoke(createUserDto: CreateUserDto): Promise<JokeModel> {
    const joke = await this.agentService.getJoke(
      'https://api.chucknorris.io/jokes/random',
      createUserDto?.category
        ? { params: { category: createUserDto?.category } }
        : {},
    );

    await this.userService.save(createUserDto, joke);

    return joke;
  }

  getHistoryOfJokes(userId: number) {
    return this.userService.find(userId);
  }
}
