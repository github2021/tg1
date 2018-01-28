import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassesComponent } from './tests/ts/classes/classes.component';
import { ArraysComponent } from './tests/ts/arrays/arrays.component';
import { TestingComponent } from './tests/ts/testing/testing.component';
import { LoginComponent } from './tests/firebase/login/login.component';
import { Test1Component } from './tests/jasmine/test1/test1.component';
import { ProtractorTest1Component } from './tests/protractor/test1/test1.component';
import { HomeComponent } from './pages/home/home.component';
import { AComponent } from './pages/stuff/a/a.component';
import { BComponent } from './pages/stuff/b/b.component';
import { UserPermissionTestingComponent } from './pages/stuff/user-permission-testing/user-permission-testing.component';
import { UserPermissionTestingUserComponent } from './pages/stuff/user-permission-testing-user/user-permission-testing-user.component';
import { AddDsuComponent } from './pages/tests/formtest1/pages/add-dsu/add-dsu.component';
import { AddSiteComponent } from './pages/tests/formtest1/pages/add-site/add-site.component';
import { Styling1Component } from './pages/tests/styling1/pages/styling1/styling1.component';
import { Styling1BComponent } from './pages/tests/styling1/pages/styling1-b/styling1-b.component';
import { Styling1CComponent } from './pages/tests/styling1/pages/styling1-c/styling1-c.component';
import { Styling1DComponent } from './pages/tests/styling1/pages/styling1-d/styling1-d.component';
import { CanDeactivateGuard } from './pages/tests/formtest1/shared/guards/can-deactivate-guard.service';
import { HtmlDomComponent } from './tests/js/html-dom/html-dom.component';

export const routes: Routes = [
  { path: '', component: TestingComponent, data: { pageTitle: "Home" } },

  { path: 'test/ts/class', component: ClassesComponent, data: { pageTitle: "TS Class" } },
  { path: 'test/ts/array', component: ArraysComponent, data: { pageTitle: "TS Array" } },
  { path: 'test/ts/testing', component: TestingComponent, data: { pageTitle: "TS testing" } },
  { path: 'test/js/html-dom', component: HtmlDomComponent, data: { pageTitle: "JS HTML DOM" } },
  { path: 'test/firebase/login', component: LoginComponent, data: { pageTitle: "Firebase" } },

  { path: 'test/jasmine/test1', component: Test1Component, data: { pageTitle: "Jasmine" } },
  { path: 'test/protractor/test1', component: ProtractorTest1Component, data: { pageTitle: "Protractor" } },

  { path: 'pages/tests/formtest1', component: AddDsuComponent, data: { pageTitle: "Form Test" } },
  { path: 'pages/tests/formtest1/add-site', component: AddSiteComponent, data: { pageTitle: "Add Site" }, canDeactivate: [CanDeactivateGuard] },

  { path: 'pages/tests/styling1', component: Styling1Component, data: { pageTitle: "Styling" } },
  { path: 'pages/tests/styling1-b', component: Styling1BComponent, data: { pageTitle: "StylingB" } },
  { path: 'pages/tests/styling1-c', component: Styling1CComponent, data: { pageTitle: "StylingC" } },
  {
    path: 'pages/tests/styling1-d',
    component: Styling1DComponent,
    data: { pageTitle: "StylingD" },
    children: [
      { path: '', redirectTo: 'child-one', pathMatch: 'full' },
      { path: 'child-one', component: Styling1BComponent, data: { id: 1 } },
      { path: 'child-two', component: Styling1BComponent, data: { id: 2 } },
      { path: 'child-three', component: Styling1BComponent, data: { id: 3 } },
    ]
  },
  { path: 'pages/stuff/a', component: AComponent, data: { pageTitle: "StuffA" } },
  {
    path: 'pages/stuff/b',
    component: BComponent,
    data: { pageTitle: "StuffB" },
    children: [
      { path: '', redirectTo: 'child-one', pathMatch: 'full' },
      { path: 'child-one', component: Styling1BComponent, data: { id: 1 } },
      { path: 'child-two', component: Styling1BComponent, data: { id: 2 } },
      { path: 'child-three', component: Styling1BComponent, data: { id: 3 } },
    ]
  },
  { path: 'pages/stuff/user-permission-testing', component: UserPermissionTestingComponent, data: { pageTitle: "StuffUPT" } },
  { path: 'pages/stuff/user-permission-testing/user/:id', component: UserPermissionTestingUserComponent, data: { pageTitle: "StuffUPT2" } },


  { path: '*', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
