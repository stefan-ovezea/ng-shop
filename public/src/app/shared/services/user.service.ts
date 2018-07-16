import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserLoginRepresentation, User, AuthentifiedUserResponse } from '../models/user';
import { Observable } from '../../../../node_modules/rxjs';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  authenticate(user: UserLoginRepresentation): Observable<AuthentifiedUserResponse> {
    return <Observable<AuthentifiedUserResponse>>this.http.post(
      'http://localhost:3000/users/login',
      { ...user },
      {
        headers: new HttpHeaders().append('Content-Type', 'application/json')
      }
    );
  }

  register(user: User): Observable<User> {
    return <Observable<User>>this.http.post(
      'http://localhost:3000/users',
      { user },
      {
        headers: new HttpHeaders().append('Content-Type', 'application/json')
      }
    );
  }
}
