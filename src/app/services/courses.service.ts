import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  allCourses:any;

  constructor(private http:HttpClient) { }

  getAllCourses(){
    const url = "https://tejtech.onrender.com/api/courses";
    this.http.get(url).subscribe(data=>{
      console.log(data);
      this.allCourses=data;

    })
  }

  randomfun(){
    console.log("random function is running from course service")
  }

}
