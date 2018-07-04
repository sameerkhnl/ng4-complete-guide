import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  itemToNavigate = '';

  onNavEventReceived(itemToNavigate: string){
    this.itemToNavigate = itemToNavigate;
  }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyAfoxv0dDv-_YMe9f7BP2Xu957VedGkn2s",
      authDomain: "ng-recipe-book-a5382.firebaseapp.com",
    });
  }
}
