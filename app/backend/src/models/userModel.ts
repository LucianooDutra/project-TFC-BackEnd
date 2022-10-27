import User from '../database/models/user';
import { IUserComplete } from '../interfaces/index';

export default class UserModel {
  constructor(public user = User) {
    this.findByEmail = this.findByEmail.bind(this);
  }

  public async findByEmail(email: string): Promise<IUserComplete | null> {
    const user = await this.user.findOne({ where: { email } });
    return user;
  }
}
