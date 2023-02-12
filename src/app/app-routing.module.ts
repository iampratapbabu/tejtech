import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './pages/homepage/homepage.component';
import { DemocompComponent } from './components/democomp/democomp.component';
import { ErrorComponent } from './components/error/error.component';
import { CoursesComponent } from './pages/courses/courses.component';
import {SingleCourseComponent} from './pages/courses/single-course/single-course.component'
import { BlogsComponent } from './pages/blogs/blogs.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserComponent } from './pages/user/user.component';
import { PaymentsComponent } from './pages/payments/payments.component'
import { FinanceComponent } from './pages/finance/finance.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { AuthGuardGuard} from './services/auth-guard.guard';



const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'payment', component:PaymentsComponent},
  {path:'home',component:HomepageComponent},
  {path:'courses',component:CoursesComponent},
  {path:'courses/:id',component:SingleCourseComponent},
  {path:'blogs',component:BlogsComponent},
  {path:'mydashboard',canActivate: [AuthGuardGuard],component:DashboardComponent},
  {path:'user',component:UserComponent},
  {path:'finance',canActivate: [AuthGuardGuard],component:FinanceComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
