import { Module } from '@nestjs/common';

@Module({
  controllers: [
    Comment
  ]
})
export class CommentsModule {
}

