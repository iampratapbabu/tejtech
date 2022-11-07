import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//material imports
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
//pages and components
import { HomepageComponent } from './pages/homepage/homepage.component';
import { DemocompComponent } from './components/democomp/democomp.component';
import { ErrorComponent } from './components/error/error.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthComponent } from './pages/auth/auth.component';
import { UserComponent } from './pages/user/user.component';
import { PaymentsComponent } from './pages/payments/payments.component';
import { SingleCourseComponent } from './pages/courses/single-course/single-course.component'



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    DemocompComponent,
    ErrorComponent,
    CoursesComponent,
    BlogsComponent,
    DashboardComponent,
    AuthComponent,
    UserComponent,
    PaymentsComponent,
    SingleCourseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
