import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CoursesService } from 'src/app/services/courses.service';




@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

courses:any=[];
loading:boolean=true;
errorLoading:boolean=false;
categories:any=[];



  constructor(private http:HttpClient,private courseService:CoursesService) { }


  ngOnInit(): void {
    this.courseService.randomfun();
    this.getAllCourses();
  }

  getAllCourses(){
    const url = "https://tejtech.onrender.com/api/courses";
    this.http.get(url).subscribe(data=>{
      console.log(data);
      this.courses=data;
      this.loading=false
      this.loadCategories();
    })
  }

  loadCategories(){
    const setCategory = new Set();
    for(let course of this.courses.courses){
      for(let category of course.category){
       // console.log(category);  
        setCategory.add(category);
      }
    }
    //console.log(setCategory);
    this.categories=setCategory;
    console.log(this.categories); 
  }

//   .subscribe(arg=>{
//     complete: () => { ... }, // completeHandler
//     error: () => { ... },    // errorHandler 
//     next: () => { ... },     // nextHandler
//     someOtherProperty: 42
// });





}
