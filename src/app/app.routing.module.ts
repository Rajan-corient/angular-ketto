import { NgModule } from '@angular/core'; 
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { LoginComponent } from './login/login.component';


const routes: Routes = [

  { 
    path: '',
    redirectTo: 'changeBox',
    pathMatch: 'full'
  },
  { 
    path: 'changeBox',
    loadChildren: './change-box/change-box.module#ChangeBoxModule',
    canActivate: [AuthGuard]
  },
  { 
    path: 'home',
    loadChildren: './home/home.module#HomeModule',
    // canActivate: [AuthGuard]
  },
  { 
    path: 'login',
    component: LoginComponent,
  },
  { 
    path: 'profile',
    loadChildren: './profile/profile.module#ProfileModule',
    canActivate: [AuthGuard]
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthGuard
  ]
})
export class AppRoutingModule { }
