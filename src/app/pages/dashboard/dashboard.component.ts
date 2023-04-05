import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private auth:AuthService,
    private router:Router
    ) { }

  user:any;
  loading:boolean=true;

  ngOnInit(): void {
  
    this.auth.loadUser().then(res=>{
      this.user = res;
      this.loading=false;
    }).catch(err=>{
      console.log(err);
    })


    
  }

}
