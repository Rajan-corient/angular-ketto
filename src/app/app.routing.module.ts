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
    loadChildren: () => import('./change-box/change-box.module').then(m => m.ChangeBoxModule),
    canActivate: [AuthGuard]
  },
  { 
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    // canActivate: [AuthGuard]
  },
  { 
    path: 'login',
    component: LoginComponent,
  },
  { 
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),
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
