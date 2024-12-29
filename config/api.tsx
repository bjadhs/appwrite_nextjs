import { ID } from 'appwrite';
import { account } from './appwrite';
import { IUser, INewUser } from '@/types';

export const createUserAccount = async (user: INewUser) => {
  try {
    await account.create(ID.unique(), user.email, user.password);
    if (!user) throw new Error('Failed to create user account');
  } catch (err) {
    console.log(err);
  }
};

export const loginUser = async (user: IUser) => {
  try {
    await account.createEmailPasswordSession(user.email, user.password);
  } catch (err) {
    console.log(err);
  }
};
export const logoutUser = async () => {
  try {
    await account.deleteSession('current');
  } catch (err) {
    console.log(`Error bj: ${err}`);
  }
};
