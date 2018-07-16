export interface User {
  id?: string;
  username: string;
  firstName: string;
  lastName: string;
  age: number;
  address: string;
  password?: string;
}

export interface UserLoginRepresentation {
  username: string;
  password: string;
}

export interface AuthentifiedUserResponse {
  username: string;
}
