import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const api_url = "app"


@Injectable()
export class Api2Service {

  users = [
    { id: 0, name: 'bob', type: 'owner' },
    { id: 1, name: 'bob2', type: 'owner2' },
    { id: 2, name: 'bob3', type: 'owner3' },
    { id: 3, name: 'bob4', type: 'owner4' },
    { id: 4, name: 'bob5', type: 'owner5' },
  ]

  constructor(private http: HttpClient) {}

  penis(): Observable < any > {
    return this.http.get(api_url + '/users')
  }



}
