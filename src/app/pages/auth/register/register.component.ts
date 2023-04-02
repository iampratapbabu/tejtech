import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../../environments/environment';
import { AuthService } from 'src/app/services/auth.service';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private _snackBar: MatSnackBar,
    private http:HttpClient,
    private toastr: ToastrService,
    private router:Router,
    private auth:AuthService
    ) { }

  loading:boolean=false;

  ngOnInit(): void {
    localStorage.setItem('name',"tejpratap")
    this.auth.loadUser().then(res=>{
      this.router.navigateByUrl('/mydashboard')
    })
  }

  async registerUser(formdata:any){
    const {name,email,password,confirmPassword}= formdata.value;
    if(name == "" || email =="" || password == "" || confirmPassword == ""){
      this.openSnackBar("Please fill All fileds",'OK')
    }else{
      console.log(formdata.value);
      this.loading=true;
    
      let url=`${environment.api}/api/users/signup`
      this.http.post(url,formdata.value).subscribe(res=>{
        this.loading=false;
        console.log(res);
        let serverResoponse:any = res;
        if(serverResoponse.status === "success"){
          console.log("success block")
          let token = serverResoponse.token;
          localStorage.setItem('token',token);
          window.location.reload();
          
        }else{
          this.toastr.error('Error',serverResoponse.msg);
        }
  
      },err=>{
        console.log(err);
        this.toastr.error(err,'Server Error');
      })
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
    if(action=='OK'){
      console.log("You pressed ok on snackbar")
    }
  }

}
