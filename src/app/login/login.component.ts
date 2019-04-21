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
      userId: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z0-9]*')]),
      email: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(6), 
                                     Validators.maxLength(12), Validators.pattern('[a-zA-Z0-9!@#$]*')])
    });

    this.loginForm = new FormGroup({
      userId: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required])
    });
  }

  signUp() {

    console.log('signUp', this.signUpForm); 
    if(this.signUpForm.status === 'VALID'){

      //this.signUpForm.value.userId = this.signUpForm.value.userId.toUpperCase();
      
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

      // this.loginForm.value.userId = this.loginForm.value.userId.toUpperCase();

      if(this.userList.some(item => (item.userId === this.loginForm.get('userId').value 
        && item.password === this.loginForm.get('password').value))){  

        this.router.navigate(['']);
        localStorage.setItem('currentUser',JSON.stringify(this.loginForm.value))
      }
    }
   
  }


}
