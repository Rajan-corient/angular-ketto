import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router :Router) { }

  loggedInUser:any = {
    userId:''
  };
  showButton:boolean = false;

  ngOnInit() {
    
    this.loggedInUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log(22,this.loggedInUser);
  }

  logout(){

    localStorage.removeItem('currentUser');
    this.router.navigate(['login']);
  }
}
