import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { MongooseCrudService } from 'nest-crud-mongoose';
import { Model } from 'mongoose';
import { CommentDocument } from './comment.document';
import { CrudService } from '@nestjsx/crud';

@Injectable()
export class CommentsService extends MongooseCrudService<CommentDocument> {
  constructor(@InjectModel('Comment') model: Model<CommentDocument>) {
    super(model);
  }
}
