import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { ProfileComponent } from './profile.component';


const routes: Routes = [

  { path: '', component: ProfileComponent }
  
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule
  ],
  declarations: [ProfileComponent]
})
export class ProfileModule { }
