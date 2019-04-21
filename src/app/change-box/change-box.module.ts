import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { ChangeBoxComponent } from './change-box.component';


const routes: Routes = [

  { path: '', component: ChangeBoxComponent }
  
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule
  ],
  declarations: [ChangeBoxComponent]
})
export class ChangeBoxModule { }
