import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from '../users/user.schema';
import { postSchema } from '.';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'User', schema: userSchema },
      { name: 'Post', schema: postSchema },
    ]),
  ],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {
}
