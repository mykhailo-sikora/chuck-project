import { Injectable } from '@nestjs/common';
import axios from 'axios';

import { JokeModel } from './joke.model';

@Injectable()
export class AgentService {
  async getJoke(url: string, config = {}): Promise<JokeModel> {
    const { data } = await axios.get(url, config);

    return data as JokeModel;
  }
}
