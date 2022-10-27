import UserModel from '../models/userModel';
import { IUserComplete } from '../interfaces/index';

export default class LoginService {
  constructor(public userModel = new UserModel()) { }

  public async login(email:string): Promise<IUserComplete | null > {
    const user = await this.userModel.findByEmail(email);

    return user;
  }
}
