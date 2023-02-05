import { Component } from '@angular/core';
import { PushNotifications } from '@capacitor/push-notifications';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TejTech';
  loggedIn:boolean=false;

  token:string="";

  constructor(private auth:AuthService) { }

  ngOnInit() {
    console.log("ng onint fired of app component");
    this.notifications();
    this.checkLogin();
    this.loggedIn=this.auth.auth;
  }

  checkLogin(){
    let token = localStorage.getItem('token');
    if(token){
      this.auth.protectService(token);
    }
  }


//push notification
  notifications(){
    PushNotifications.addListener("registration",
    (token)=>{
      this.token=token.value;
      //alert(this.token);

    })

    PushNotifications.addListener("pushNotificationReceived",
    (notification)=>{
      alert(JSON.stringify(notification));
    })

    PushNotifications.register();

  }

  menubutton(){
    console.log("menu button clicked");
  }


}
