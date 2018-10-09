export interface IUser {
  _id?: string;
  login: string;
  password: string;
  email?: string;
  name?: string;
  surname?: string;
  role?: string;
  ban?: string;
  avatar?: string;
}

export class User implements IUser{
  constructor (
    public login: string,
    public email: string,
    public password: string,
    public name: string,
    public surname: string,
  ) { }
}
