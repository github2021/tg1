import { inject, TestBed, async } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LanguagesServiceHttpClient, URL } from './languages.service.httpclient';describe('Service: LanguagesServiceHttpClient', () => {
  let service, httpMock;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [LanguagesServiceHttpClient]
  }));

  beforeEach(inject([LanguagesServiceHttpClient, HttpTestingController], (s, h) => {
    service = s;
    httpMock = h;
  }));

  //specs
  it('should return available users', done => {

    const USERS = [{
        "id": 34,
        "username": "spiderman",
        "roles": ["admin", "user"],
        "superuser": true
      },
      {
        "id": 67,
        "username": "batman",
        "roles": ["user"]
      }
    ];

    service.get()
      .subscribe({
        next: res => {
          expect(res).toBe(USERS);
          expect(res.length).toEqual(2);
          done();
        }
      });
    httpMock.expectOne(URL)
      .flush(USERS);
    httpMock.verify();
  });

})
