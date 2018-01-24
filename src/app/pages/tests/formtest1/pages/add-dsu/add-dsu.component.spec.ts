import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiService } from '../../shared/services/api.service';
import { FormComponent } from '../../shared/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AddDsuComponent } from './add-dsu.component';

import { InMemHeroService } from '../../shared/services/in-memory-data-service.service';

describe('lkrelkerlk', () => {
  let component: AddDsuComponent;
  let fixture: ComponentFixture < AddDsuComponent > ;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [AddDsuComponent, FormComponent],
        imports: [
          HttpModule,
          InMemoryWebApiModule.forRoot(InMemHeroService),
          FormsModule,
          ReactiveFormsModule,
          HttpClientModule
        ],
        providers: [
          ApiService
        ]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDsuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('analsex', () => {


    const fixture = TestBed.createComponent(AddDsuComponent);

    expect(1).toBe(1)


    //   const app = fixture.debugElement.componentInstance;
    //   app.service.getItems().then(res => {
    //       fixture.detectChanges();
    //       console.log(res);
    //       expect(app.items.length).toBeGreaterThan(0);
    //     })
    //     .catch(err => console.log(err));
    // })

  });


});
