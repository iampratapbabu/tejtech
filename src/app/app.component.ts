import { Component } from '@angular/core';
import { PushNotifications } from '@capacitor/push-notifications';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TejTech';
  loggedin=true;

  token:string="";

  ngOnInit() {
    console.log("ng onint fired of app component");
    this.notifications();
  }


//push notification
  notifications(){
    PushNotifications.addListener("registration",
    (token)=>{
      this.token=token.value;
      alert(this.token);

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
