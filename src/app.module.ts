import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from './users/user.schema';
import { UsersModule } from './users/users.module';
// import { MONGO_URI, MONGO_CONFIG } from './mongoose.config';
import { postSchema } from './posts';
import { PostsModule } from './posts/posts.module';
import { getConfig } from './mongoose.config';

@Module({
  imports: [
    MongooseModule.forRootAsync({async useFactory() {
      // MONGO_URI, MONGO_CONFIG
      return getConfig();
    }}),
    MongooseModule.forFeature([
      { name: 'User', schema: userSchema },
      { name: 'Post', schema: postSchema },
    ]),
    UsersModule,
    PostsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
