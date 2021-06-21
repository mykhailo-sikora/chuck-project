import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AgentService } from './agent.service';
import { UserModule } from './user.module';

@Module({
  imports: [UserModule, MongooseModule.forRoot('mongodb://localhost/chuck')],
  controllers: [AppController],
  providers: [AppService, AgentService],
})
export class AppModule {}
