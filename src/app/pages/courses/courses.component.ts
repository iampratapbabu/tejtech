import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

courses=[ //app development
	{
		"title":"Android Java Masterclass - Become an App Developer",
		"body":"Improve your career options by learning Android app Development. Master Android Studio and build your first app today",
		"courseUrl":"",
		"imageUrl":"https://www.bestonlinecourses.info/wp-content/uploads/AndroidJavaMasterclass.jpg",
		"realUrl":"",
		"category":["app-development","frontend-development"]
	},
	{
		"title":"Angular - The Complete Guide (2022 Edition)",
		"body":"Master Angular 13 (formerly “Angular 2”) and build awesome, reactive web apps with the successor of Angular.js",
		"courseUrl":"",
		"imageUrl":"https://learnacourseonline.com/wp-content/uploads/2022/04/Angular-The-Complete-Guide-2022-Edition-udemy.jpg",
		"realUrl":"",
		"category":["app-development","frontend-development"]
	},
	{
		"title":"Flutter & Dart - The Complete Guide [2022 Edition]",
		"body":"A Complete Guide to the Flutter SDK & Flutter Framework for building native iOS and Android apps",
		"courseUrl":"",
		"imageUrl":"https://ccweb.imgix.net/https%3A%2F%2Fd3f1iyfxxz8i1e.cloudfront.net%2Fcourses%2Fcourse_image%2F5ae0e0624493.jpg?ar=16%3A9&auto=format&cs=strip&fit=crop&h=380&ixlib=php-3.3.1&w=535&s=02afcd9c9f60b51f8c5f48930d205cb6",
		"realUrl":"",
		"category":["app-development","frontend-development"]
	},
	{
		"title":"Ionic - Build iOS, Android & Web Apps with Ionic & Angular",
		"body":"Build Native iOS & Android as well as Progressive Web Apps with Angular, Capacitor and the Ionic Framework (Ionic 4+).",
		"courseUrl":"",
		"imageUrl":"https://www.filepicker.io/api/file/CJuJDJsxQoCcY0HCLGOU",
		"realUrl":"",
		"category":["app-development","frontend-development"]
	},
	{
		"title":"React Native Advanced Concepts",
		"body":"Master the advanced topics of React Native: Animations, Maps, Notifications, Navigation and More!",
		"courseUrl":"",
		"imageUrl":"https://miro.medium.com/max/796/1*jh6bmapyE8nPWju7W_7qEw.png",
		"realUrl":"",
		"category":["app-development","frontend-development"]
	},
	{
		"title":"The Complete React Native + Hooks Course",
		"body":"Understand React Native with Hooks, Context, and React Navigation.",
		"courseUrl":"",
		"imageUrl":"https://miro.medium.com/max/1400/0*3COG2jWwTUd0x-Ip.jpg",
		"realUrl":"",
		"category":["app-development","frontend-development"]
	}
]


  constructor() { }

  ngOnInit(): void {
    console.log(this.courses);
  }

}
