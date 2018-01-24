import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { Constants } from './shared/constants';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ClassesComponent } from './tests/ts/classes/classes.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { HomeComponent } from './pages/home/home.component';
import { ArraysComponent } from './tests/ts/arrays/arrays.component';
import { TestingComponent } from './tests/ts/testing/testing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppService } from './app.service';
import { AddDsuComponent } from './pages/tests/formtest1/pages/add-dsu/add-dsu.component';
import { AddSiteComponent } from './pages/tests/formtest1/pages/add-site/add-site.component';
import { NavComponent } from './pages/tests/formtest1/shared/nav/nav.component';
import { FormComponent } from './pages/tests/formtest1/shared/form/form.component';


import { ApiService } from './pages/tests/formtest1/shared/services/api.service';
import { CanDeactivateGuard } from './pages/tests/formtest1/shared/guards/can-deactivate-guard.service';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemHeroService } from './pages/tests/formtest1/shared/services/in-memory-data-service.service';
import { Styling1Component } from './pages/tests/styling1/pages/styling1/styling1.component';
import { Styling1footerComponent } from './pages/tests/styling1/shared/styling1footer/styling1footer.component';
import { Styling1BComponent } from './pages/tests/styling1/pages/styling1-b/styling1-b.component';
import { LoginComponent } from './tests/firebase/login/login.component';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { Styling1CComponent } from './pages/tests/styling1/pages/styling1-c/styling1-c.component';

import { 
    MatSidenavModule,
    MatButtonModule,
    MatIconModule, 
} from '@angular/material';
import { Styling1DComponent } from './pages/tests/styling1/pages/styling1-d/styling1-d.component';
import { Test1Component } from './tests/jasmine/test1/test1.component';
import { ProtractorTest1Component } from './tests/protractor/test1/test1.component';
import { HelloComponent } from './tests/jasmine/test1/hello.component';
import { AComponent } from './pages/stuff/a/a.component';
import { BComponent } from './pages/stuff/b/b.component';
import { HtmlDomComponent } from './tests/js/html-dom/html-dom.component';



@NgModule({
  declarations: [
    AppComponent,
    ClassesComponent,
    NavigationComponent,
    HomeComponent,
    ArraysComponent,
    TestingComponent,
    AddDsuComponent,
    AddSiteComponent,
    NavComponent,
    FormComponent,
    Styling1Component,
    Styling1footerComponent,
    Styling1BComponent,
    LoginComponent,
    Styling1CComponent,
    Styling1DComponent,
    Test1Component,
    ProtractorTest1Component,
    HelloComponent,
    AComponent,
    BComponent,
    HtmlDomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemHeroService),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [
    // Constants
    AppService,
    ApiService,
    CanDeactivateGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
