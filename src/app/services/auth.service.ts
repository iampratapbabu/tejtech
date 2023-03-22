import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';
import { Component } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http:HttpClient,
    private toastr: ToastrService,
    private router:Router
  ) { }

  isLoggedIn:boolean=false;
  authenticatationState = new BehaviorSubject(false);
  userData:any;
  authLoading:boolean=false;

  isAuthenticated(){
    return this.authenticatationState.value;
  }


  checkToken(){
    let token=localStorage.getItem('token');
    if(token){
      console.log("token added",token)
      this.authenticatationState.next(true);
      this.loadUser();
    }else{
      console.log("token not found");
      this.authenticatationState.next(false);
    }
  }

  async loadUser(){
    let token = localStorage.getItem('token');
    if(token){
      const httpOptions = {
        headers: new HttpHeaders({
          'x-access-token': token
      })
      }
      this.http.get(`${environment.api}/api/users/protect`,httpOptions).subscribe(res=>{
      console.log(res);
      this.userData = res;
      this.authenticatationState.next(true);
      },err=>{
        console.log(err);
        this.logout();
        this.toastr.error(err.error.errormsg.message,'Error');
      });
    }

  }

  async loginService(logindata:any){
    console.log(environment.api);
   
      let url=`${environment.api}/api/users/login`;
      this.http.post(url,logindata).subscribe(res=>{
        console.log(res);
        let serverResoponse:any = res;
        if(serverResoponse.status === "fail" || serverResoponse.status === "[SERVER ERROR]"){
          this.toastr.error('Error',serverResoponse.msg);
        }else{
          console.log("loggged in")
          let token = serverResoponse.token;
          localStorage.setItem('token',token);
          this.authenticatationState.next(true);
          this.isLoggedIn=true;
          this.userData=serverResoponse.user;
          console.log(this.userData);
          this.toastr.success("successfully logged in",'Success');
          this.router.navigate(['/mydashboard']);
          
        }
      },err=>{
        console.log(err);
        this.toastr.error(err.error.msg,'Error');
      })
  }

  logout(){
    console.log("user logged out");
    this.authenticatationState.next(false);
    localStorage.removeItem('token');
    this.userData={};
    this.toastr.success("Logged out",'Success');
    this.router.navigate(['/login']);
    window.location.reload();
  }





}
