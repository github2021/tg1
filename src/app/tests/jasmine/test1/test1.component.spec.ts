import {
  async,
  ComponentFixture,
  TestBed,
  tick,
  fakeAsync,
  inject,
} from '@angular/core/testing';

import { Test1Component } from './test1.component';

import { MockBackend } from '@angular/http/testing';

import {
  Http,
  ConnectionBackend,
  BaseRequestOptions,
  Response,
  ResponseOptions
} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import {HelloComponent} from './hello.component';

import { SpotifyService } from './spotifyservice';
import { DirtyService } from './dirty.service';


//export class Calculator {
class Calculator {
  sum(a: number, b: number): number {
    return a + b;
  }
}


describe('sdkjsdjksd', () => {
  it('jesus christ',

    fakeAsync(() => {


      let flag = false;
      setTimeout(() => { flag = true; }, 100);
      expect(flag).toBe(false);
      tick(50);
      expect(flag).toBe(false);
      tick(50);
      expect(flag).toBe(true);


    }))


})



describe('Test1Component', () => {
  let component: Test1Component;
  let fixture: ComponentFixture < Test1Component > ;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [Test1Component, HelloComponent]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Test1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


describe('Calculator', () => {
  it('sums 1 and 1 to 2', () => {
    var calc = new Calculator();
    expect(calc.sum(1, 1)).toEqual(2);
  });
});



describe('SpotifyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [

        BaseRequestOptions,
        MockBackend,
        DirtyService,
        SpotifyService,

        {
          provide: Http,
          useFactory: (
            backend: ConnectionBackend,
            defaultOptions: BaseRequestOptions
          ) => {
            return new Http(backend, defaultOptions);
          },


          deps: [MockBackend, BaseRequestOptions]
        },
      ]
    });
  });

  // sets up an expectation that the correct URL will being requested
  function expectURL(
    backend: MockBackend,
    url: string

  )

  {
    backend.connections.subscribe(c => {

      // console.log(c);

      expect(c.request.url).toBe(url);

      const response = new ResponseOptions({ body: '{"name": "felipe"}' });

      c.mockRespond(new Response(response));

    });
  }



  describe('getTrack', () => {
    it('retrieves using the track ID',

      inject([SpotifyService, MockBackend],
        fakeAsync((svc, backend) => {

          let res;

          expectURL(backend, 'https://api.spotify.com/v1/tracks/TRACK_ID');

          svc.getTrack('TRACK_ID').subscribe((_res) => { res = _res; });

          tick();

          expect(res.name).toBe('felipe');

        }))
    );
  });





  describe('getArtist', () => {
    it('retrieves using the artist ID',
      inject([SpotifyService, MockBackend], fakeAsync((svc, backend) => {
        let res;
        expectURL(backend, 'https://api.spotify.com/v1/artists/ARTIST_ID');
        svc.getArtist('ARTIST_ID').subscribe((_res) => {
          res = _res;
        });
        tick();
        expect(res.name).toBe('felipe');
      }))
    );
  });



  describe('getAlbum', () => {
    it('retrieves using the album ID',
      inject([SpotifyService, MockBackend], fakeAsync((svc, backend) => {
        let res;
        expectURL(backend, 'https://api.spotify.com/v1/albums/ALBUM_ID');
        svc.getAlbum('ALBUM_ID').subscribe((_res) => {
          res = _res;
        });
        tick();
        expect(res.name).toBe('felipe');
      }))
    );
  });





  describe('searchTrack', () => {
    it('searches type and term',
      inject([SpotifyService, MockBackend], fakeAsync((svc, backend) => {
        let res;
        expectURL(backend, 'https://api.spotify.com/v1/search?q=TERM&type=track');
        svc.searchTrack('TERM').subscribe((_res) => {
          res = _res;
        });
        tick();
        expect(res.name).toBe('felipe');
      }))
    );
  });
});
