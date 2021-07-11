import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  UserList:any = [];
  loggedInUser:any;
  user:any;

  ngOnInit() {

     this.UserList = JSON.parse(localStorage.getItem('localUser'));
     this.loggedInUser = JSON.parse(localStorage.getItem('currentUser'));

     this.user = this.UserList.find((element) => {
      return element.userId == this.loggedInUser.userId;
    });

    console.log(this.user);

  }

  

}
