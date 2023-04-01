import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-single-course',
  templateUrl: './single-course.component.html',
  styleUrls: ['./single-course.component.css']
})
export class SingleCourseComponent implements OnInit {

  course_id:any;

  singleCourse:any;
  constructor(private activatedRoute:ActivatedRoute,private http:HttpClient,) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params=>{
    this.course_id = params.get('id');
    this.loadSingleCourse();
    })
  };

  async loadSingleCourse(){
   
    this.http.get(`${environment.api}/api/courses/single/${this.course_id}`).subscribe(res=>{
      console.log(res);
      this.singleCourse=res;
    },err=>{
      console.log(err); 
    })
  }

  gotoPage(courseUrl:any){
    window.open(courseUrl, "_blank");
  }

  buyCourse(courseid:String){
    console.log("course id is:",courseid)
  }

}
