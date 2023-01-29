import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar,private http:HttpClient,private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  async registerUser(formdata:any){
    const {name,email,password,confirmPassword}= formdata.value;
    if(name == "" || email =="" || password == "" || confirmPassword == ""){
      this.openSnackBar("Please fill All fileds",'OK')
    }
    console.log(formdata.value);

    let url="https://tejtech.onrender.com/api/users/signup"
    let dev_url="http://localhost:8000/api/users/signup"
    await this.http.post(url,formdata.value).subscribe(res=>{
      console.log(res);
      this.toastr.success('SUCCESS', 'Please Login');
    },err=>{
      console.log(err);
      this.toastr.error(err.error.errormsg.message,'Error');
    })

  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
    if(action=='OK'){
      console.log("You pressed ok on snackbar")
    }
  }

}
