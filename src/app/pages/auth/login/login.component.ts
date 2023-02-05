import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {MatSnackBar} from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar,
    private http:HttpClient,
    private toastr: ToastrService,
    private auth:AuthService,
    private router:Router) { }
  loading:boolean=false;

  ngOnInit(): void {
    this.auth.loadUser();
  }

  async loginUser(logindata: any) {
    const { email, password } = logindata.value;
    if (email == "" || password == "") {
      this.openSnackBar("Please fill All fileds", 'OK')
    } else {
      this.loading = true;
      this.auth.loginService(logindata.value)
      console.log(logindata.value);
      this.loading = false;
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
    if(action=='OK'){
      console.log("You pressed ok on snackbar")
    }
  }

}
