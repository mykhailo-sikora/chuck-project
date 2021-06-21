import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { User, UserDocument } from './user.schema';
import { CreateUserDto } from './create-user.dto';
import { JokeModel } from './joke.model';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<UserDocument>) {}

  async save(createUserDto: CreateUserDto, joke: JokeModel): Promise<User> {
    const createdUser = new this.userModel({
      userId: createUserDto.userId,
      value: joke.value,
    });

    return createdUser.save();
  }

  find(userId: number): Promise<UserDocument[]> {
    const DESC = '-date';
    const LIMIT = 10;

    return this.userModel.find({ userId }).sort(DESC).limit(LIMIT).exec();
  }
}
