import { Component } from '@angular/core';
import { PushNotifications } from '@capacitor/push-notifications';
import { AuthService } from './services/auth.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mFinance';
  loggedIn:boolean=false;

  token:string="";

  constructor(private auth:AuthService) { }
  user:any;
  ngOnInit() {
    console.log(`Backend on ${environment.api}`);
    //this.notifications();
    this.auth.loadUser();
    

    
    
  }

  checkLogin(){
    if(this.auth.isAuthenticated()){
      this.user=this.auth.userData;
    }
    console.log("checkin clicked");
    this.loggedIn = this.auth.authenticatationState.value;
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

  logout(){
    this.auth.logout();
  }


}
