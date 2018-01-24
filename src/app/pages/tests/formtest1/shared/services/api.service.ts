import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
//import { map } from 'rxjs/operators';

import { Dsu } from '../models/dsu.model';
import { Site } from '../models/site.model';
import { DsuMap } from '../models/dsu-map.model';


const api_url = "app"

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) {}



  public getshit(): Observable < any > {
    return this.http.get < any > (api_url + '/heroes')
  }

  public getshit2(): Observable < any > {
    return this.http.get < any > (api_url + '/dsus')
  }
  public postshit(): Observable < any > {
    return this.http.post < any > (api_url + '/dsus', { name: "kjkkjjkjk", description: "jkjkjkjkkj", cert: null })
  }





  public putDsu(dsu: Dsu): Observable < Dsu > {
    return this.http.post < Dsu > (api_url + '/dsus', dsu)
  }

  public putSite(site: Site): Observable < Site > {
    return this.http.post < Site > (api_url + '/sites', site)
  }

  public getDsus(): Observable < DsuMap > {
    return this.http.get < DsuMap > (api_url + '/dsus')
  }

}
