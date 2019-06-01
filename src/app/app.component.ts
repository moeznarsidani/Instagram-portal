import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'instagram-like';
 
  ngOnInit() {
    const firebaseConfig = {
      apiKey: "AIzaSyDOtPk1PfARE3uoKCtTBObx-ZhgOkugmwg",
      authDomain: "instafram-65cd2.firebaseapp.com",
      databaseURL: "https://instafram-65cd2.firebaseio.com",
      projectId: "instafram-65cd2",
      storageBucket: "instafram-65cd2.appspot.com",
      messagingSenderId: "469391239131",
      appId: "1:469391239131:web:511730d0f5b40f3a"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
   }
  }
  
    

