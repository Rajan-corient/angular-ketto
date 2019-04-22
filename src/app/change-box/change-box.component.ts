import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-change-box',
  templateUrl: './change-box.component.html',
  styleUrls: ['./change-box.component.css']
})
export class ChangeBoxComponent implements OnInit {

  constructor() { }
//
  amount:any;
  change:any = []

  ngOnInit() {
  }

  changeFunction = () => {

    this.change=[];

    while(this.amount > 0){

        if(this.amount >= 10) {

            if (this.amount % 10 == 0) {

                this.change.push({'ten_Rs_coin': this.amount / 10})
                this.amount = this.amount % 10
            } else {

                this.change.push({'ten_Rs_coin': Math.floor(this.amount / 10)})
                this.amount = this.amount % 10
            }
            }else if(this.amount >= 5){

                if(this.amount % 5 == 0){

                   this.change.push({'five_Rs_coin': this.amount / 5})
                   this.amount = this.amount % 5
                }else{

                   this.change.push({'five_Rs_coin': Math.floor(this.amount / 5)})
                   this.amount = this.amount % 5
                }

            }else if(this.amount >= 2){

                if(this.amount % 2 == 0){

                    this.change.push({'two_Rs_coin': this.amount / 2})
                    this.amount = this.amount % 2

                }else{

                    this.change.push({'two_Rs_coin': Math.floor(this.amount / 2)})
                    this.amount = this.amount % 2
                }
            }else{

                this.change.push({'one_Rs_coin': this.amount / 1})
                this.amount = 0
            }

        }

    console.log('result', this.change)
    // return this.change;
}

// b = (X) => {

//   let a = [];

//       if(X >= 10) {

//           if (X % 10 == 0) {

//               return console.log(a.push(X / 10))
//           }else{

//               a.push(Math.floor(X / 10))
//               X = X % 10
//               console.log(X)

//               }
//           }
//           if(X > 5){

//               if(X % 5 == 0){

//                   return console.log(a.push(X / 10))
//               }else{

//                   a.push(Math.floor(X / 5))
//                   X = X %5
//               }

//           }
//           if(X > 2){

//               if(X % 2 == 0){

//                   return console.log(a.push(X / 10))
//               }else{

//                   a.push(Math.floor(X / 2))
//                   X = X % 2
//               }
//           }if(X>1){

//               a.push(X / 1)
//               X = 0
//           }

//   return console.log('result',a)
// }

}
