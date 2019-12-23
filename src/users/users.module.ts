import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from './user.schema';
import { postSchema } from '../posts/post.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'User', schema: userSchema },
      { name: 'Post', schema: postSchema },
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {
}
