import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from './users/user.schema';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot(MONGO_URI, MONGO_CONFIG),
    MongooseModule.forFeature([
      { name: 'User', schema: userSchema },
      { name: 'Post', schema: postSchema },
    ]),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
