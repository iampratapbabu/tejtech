import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  title="TejTech";
  isLoading:boolean=true;

  constructor(private router:Router,private http:HttpClient,) { }

  ngOnInit(): void {
  	this.getdata();
  }

  getdata(){
  	console.log("get data function fires")

  }

}
