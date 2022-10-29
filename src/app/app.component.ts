import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TejTech';



  ngOnInit() {
    console.log("ng onint fired of app component")
  }

  menubutton(){
    console.log("menu button clicked");
  }


}
