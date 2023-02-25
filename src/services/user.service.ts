import instance from '@/api/instance';
import { Credentials, User } from '@/models/user.model';

export const getUserLogin = (data:any) => {
  return instance.postForm<User>('account/user/login',data);
};

export const getUserRegister = (data:Credentials) => {
  return instance.post<Credentials>('account/user',data);
};