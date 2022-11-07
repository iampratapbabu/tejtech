import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-course',
  templateUrl: './single-course.component.html',
  styleUrls: ['./single-course.component.css']
})
export class SingleCourseComponent implements OnInit {

  id:any;

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params=>{
    this.id = params.get('id');
    
    })
  }

}
