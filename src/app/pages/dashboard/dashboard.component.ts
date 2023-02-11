import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private auth:AuthService) { }

  user:any;
  loading:boolean=true;

  ngOnInit(): void {
    setTimeout(()=>{
      this.user = this.auth.userData;
      this.loading=false;
    },1500)
  }

}
