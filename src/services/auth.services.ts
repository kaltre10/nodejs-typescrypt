import UserModel from '../model/users.model';
import { Users } from '../interface/Users';

const upUser = async(data:Users) => {
    const newUser = await UserModel.create(data);
    return newUser;
}

const getUser = async(email: string) => {
    const user = await UserModel.findOne({ email }) || null;
    return user;
}

export = { upUser, getUser }