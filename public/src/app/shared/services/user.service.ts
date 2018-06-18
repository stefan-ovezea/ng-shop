import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserLoginRepresentation, User } from '../models/user';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) {}

    authenticate(user: UserLoginRepresentation) {
        return this.http.post('http://localhost:3000/users/login', {...user}, {
            headers: new HttpHeaders().append('Content-Type', 'application/json')
        });
    }

    register(user: User) {
        return this.http.post('http://localhost:3000/users', {user}, {
            headers: new HttpHeaders().append('Content-Type', 'application/json')
        });
    }
}
