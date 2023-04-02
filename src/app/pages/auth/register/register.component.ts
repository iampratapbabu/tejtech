import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../../environments/environment';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar,private http:HttpClient,private toastr: ToastrService,private router:Router) { }

  loading:boolean=false;

  ngOnInit(): void {
    localStorage.setItem('name',"tejpratap")
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
        if(serverResoponse.status == "fail" || serverResoponse.status == "[SERVER ERROR]"){
          this.toastr.error('Error',serverResoponse.msg);
        }else{
          let token = serverResoponse.token;
          localStorage.setItem('token',token);
          this.router.navigate(['/mydashboard']);
        }
  
      },err=>{
        console.log(err);
        this.toastr.error(err.error.errormsg.message,'Error');
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
