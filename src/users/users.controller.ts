import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Crud({
  model: {
    type: User,
  },
})
@Controller('users')
// @ts-ignore
export class UsersController implements CrudController<User> {

  constructor(public service: UsersService) {
  }
}
