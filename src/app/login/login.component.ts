import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router :Router) { }

  loginPage:boolean = true;

  signUpForm: FormGroup;
  loginForm: FormGroup;

  userList:any = [];

  ngOnInit() {

    this.userList = JSON.parse(localStorage.getItem('localUser'))

    this.signUpForm = new FormGroup({
      fname: new FormControl('', Validators.required),
      lname: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9.@]*')])
    });

    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9.@]*')])
    });
  }

  signUp() {

    console.log('signUp', this.signUpForm); 
    if(this.signUpForm.status === 'VALID'){
      
      if(this.userList){
        this.userList.push(this.signUpForm.value);
      }else{
        this.userList = [];
        this.userList.push(this.signUpForm.value);
      }
      console.log(11,this.userList)
      localStorage.setItem('localUser', JSON.stringify(this.userList));
      this.signUpForm.reset();
    }

  }

  login() {

    console.log('login', this.loginForm);
    if(this.loginForm.status === 'VALID'){

      if(this.userList.some(item => (item.email === this.loginForm.get('email').value 
        && item.password === this.loginForm.get('password').value))){

        this.router.navigate(['home']);
        localStorage.setItem('currentUser',JSON.stringify(this.loginForm.value))
      }
    }
   
  }


}
