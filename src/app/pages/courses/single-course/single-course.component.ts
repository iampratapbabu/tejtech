import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-course',
  templateUrl: './single-course.component.html',
  styleUrls: ['./single-course.component.css']
})
export class SingleCourseComponent implements OnInit {

  course_id:any;
  dev_url="http://localhost:8000/api/";
  url='https://tejtech.onrender.com/api/'
  singleCourse:any;
  constructor(private activatedRoute:ActivatedRoute,private http:HttpClient,) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params=>{
    this.course_id = params.get('id');
    this.loadSingleCourse();
    })
  };

  async loadSingleCourse(){
    await this.http.get(this.url+`courses/single/${this.course_id}`).subscribe(res=>{
      console.log(res);
      this.singleCourse=res;
    },err=>{
      console.log(err); 
    })
  }

}
