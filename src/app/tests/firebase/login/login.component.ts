import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app'
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //items: any
  items: Observable < any[] > ;
  error:any;
  item: any;

  constructor(
    db: AngularFireDatabase,
    public afAuth: AngularFireAuth
  ) {

    //this.item = db.object('item').valueChanges();

    const itemRef = db.object('item');
    itemRef.set({ name: 'new name!' });

    // const itemRef = db.object('item');
    // itemRef.update({ name: "analsex"});

    // const itemRef = db.object('item');
    // itemRef.remove();

    //   const promise = db.object('item').update({name: "analsex"});
    //   promise
    //     .then(_ => console.log('success'))
    //     .catch(err => console.log(err, 'You dont have access!'));
    // }

  }

  ngOnInit() {}


  onSubmit(formData) {
    if (formData.valid) {

      console.log(formData.value);

      this.afAuth.auth.signInWithEmailAndPassword(formData.value.email, formData.value.password)
      .then (res => { console.log(res)})
      .catch (error => {
      	console.log(error);
      	this.error = error
      })

  }}




  //     this.af.auth.login({
  //       email: formData.value.email,
  //       password: formData.value.password
  //     }, {
  //       provider: AuthProviders.Password,
  //       method: AuthMethods.Password,
  //     }).then(
  //       (success) => {
  //         console.log(success);
  //         this.router.navigate(['/my_dashboard']);
  //       }).catch(
  //       (err) => {
  //         console.log(err);
  //         this.error = err;
  //       })
  //   }
  // }




  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut();
  }

}
