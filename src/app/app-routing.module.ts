import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './pages/homepage/homepage.component';
import { DemocompComponent } from './components/democomp/democomp.component';
import { ErrorComponent } from './components/error/error.component';


const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'demo', component:DemocompComponent},
  {path:'home',component:HomepageComponent},
  {path:'error/:name',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
