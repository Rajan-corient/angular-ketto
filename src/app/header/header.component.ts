import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router :Router) { }

  loggedInUser:any;

  ngOnInit() {

    this.loggedInUser = JSON.stringify(localStorage.getItem('currentUser'));
  }

  logout(){

    localStorage.removeItem('currentUser');
    this.router.navigate(['login']);
  }
}
