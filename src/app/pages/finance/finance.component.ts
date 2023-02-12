import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})
export class FinanceComponent implements OnInit {

  constructor( private http:HttpClient,private auth:AuthService) { }

  tempfinanceStatus:any;
  financeStatus:any;

  ngOnInit(): void {
    setTimeout(()=>{
      this.getFinanceStatus();
    },800)
    
  }

  getFinanceStatus(){
    this.http.get(`http://localhost:8000/api/finance/status/${this.auth.userData._id}`).subscribe(res=>{
      console.log(res);
      this.tempfinanceStatus=res;
      this.financeStatus=this.tempfinanceStatus.finance;
    },err=>{
      console.log(err);
      let err_response=err;
      alert(err_response.error.msg);
    })
  }

}
