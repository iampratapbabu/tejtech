import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http:HttpClient,
    private toastr: ToastrService,
    private router:Router
  ) { }

  auth:boolean=false;
  userData:any;
  authLoading:boolean=false;

  isAuthenticated(){
    return this.auth;
  }

  async loginService(logindata:any){
    let url="https://tejtech.onrender.com/api/users/signup"
      let dev_url="http://localhost:8000/api/users/login"
      await this.http.post(dev_url,logindata).subscribe(res=>{
        console.log(res);
        let serverResoponse:any = res;
        if(serverResoponse.status === "fail" || serverResoponse.status === "[SERVER ERROR]"){
          this.toastr.error('Error',serverResoponse.msg);
        }else{
          console.log("loggged in")
          let token = serverResoponse.token;
          localStorage.setItem('token',token);
          this.auth=true;
          this.userData=serverResoponse.user;
          console.log(this.userData)
          this.router.navigate(['/mydashboard']);
        }
      },err=>{
        console.log(err);
        this.toastr.error(err.error.msg,'Error');
      })
  }

  async protectService(token:String){
    console.log(token)
    if(!token){
      this.auth=false;
    }
    this.auth=true;
  }

}
