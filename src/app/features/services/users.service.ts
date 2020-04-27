import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private endpoint = `${environment.BASE_URL_API}/users`;

  constructor(
    private http: HttpClient
  ) {}

  getUsers() {
    return this.http.get(this.endpoint);
  }

  getUserById(id: number) {
    const url = `${this.endpoint}/${id}`;
  }
}
