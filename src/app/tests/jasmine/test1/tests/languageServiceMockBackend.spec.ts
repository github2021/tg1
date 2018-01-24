import {inject, TestBed, async} from '@angular/core/testing';
import {MockBackend} from '@angular/http/testing';
import {HttpModule, XHRBackend, Response, ResponseOptions} from '@angular/http';

import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
const URL = 'https://gist.githubusercontent.com/gsans/09c246281b92c014d691c4aa6a223e73/raw/ee4c65c31a70e845723d213de5493600000d8ba5/languages.json';

@Injectable()
export class LanguagesServiceHttp {
  constructor(private http:Http) { }
  
  get(){
    return this.http.get(URL) // ../api/languages.json
      .map(response => response.json()); 
  }
}


describe('MockBackend: LanguagesServiceHttp', () => {
  let mockbackend, service;

  //setup
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      providers: [
        LanguagesServiceHttp,
        { provide: XHRBackend, useClass: MockBackend }
      ]
    })
  });
    
  beforeEach(inject([LanguagesServiceHttp, XHRBackend], (_service, _mockbackend) => {
    service = _service;
    mockbackend = _mockbackend;
  }));

  //specs
  it('should return mocked response (async)', async(() => {
    let response = ["ru", "es"];
    mockbackend.connections.subscribe(connection => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(response)
      })));
    });
    service.get().subscribe(languages => {
      expect(languages).toContain('ru');
      expect(languages).toContain('es');
      expect(languages.length).toBe(2);
    });
  }));  

  // Note: can't use fakeAsync with XHR calls
  it('should return mocked response (done)', done => {
    let response = ["ru", "es"];
    mockbackend.connections.subscribe(connection => {
      connection.mockRespond(new Response(new ResponseOptions({body: JSON.stringify(response)})));
    });
    service.get().subscribe(languages => {
      expect(languages).toContain('ru');
      expect(languages).toContain('es');
      expect(languages.length).toBe(2);
      done();
    });
  });
})