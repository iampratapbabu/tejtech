import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  title="mFinance";
  isLoading:boolean=true;

  constructor(
    private router:Router,
    private http:HttpClient,
    private auth:AuthService
    ) { }

    user:any;

  ngOnInit(): void {

  	this.getdata();
    this.auth.loadUser().then(res=>{
      this.isLoading=false;
      this.user=this.auth.userstate.value;
    }).catch(err=>{
      console.log(err);
      this.router.navigate(['/login'])
    })


  }

  
  getdata(){
  	console.log("get data function fires")

  }

}
