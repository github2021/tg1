import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

export const URL = 'https://gist.githubusercontent.com/gsans/a85f14f67836840d11cf96459d6c4216/raw/03ebe48e649a6491b5f94d861301035669e5621d/users.json'



interface User {
  id: number;
  username: string;
  roles: Array < string > ;
  superuser ? : boolean;
}

interface UsersResponse {
  users: Array < User > ;
}

@Injectable()
export class LanguagesServiceHttpClient {
  constructor(private http: HttpClient) {}


  get() {
    //return this.http.get < UsersResponse > (URL)
    return this.http.get < UsersResponse > (URL)
  }

  // get() {
  //   //return this.http.get < UsersResponse > (URL)
  //   return this.http.get < UsersResponse > (URL).map(response => {
  //     console.log("penis", response);

  //     // response.users
  //     // console.log(response.users);
  //   });
}
