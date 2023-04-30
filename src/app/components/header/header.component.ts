import { Component, OnInit } from '@angular/core';
import { PushNotifications } from '@capacitor/push-notifications';;
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'mFinance';
  loggedIn:boolean=false;

  token:string="";

  constructor(
    private auth:AuthService,
    private router:Router
    ) { }
  user:any;


  async ngOnInit() {
    console.log(`Backend on ${environment.api}`);
    //this.notifications();

    // this.auth.loadUser().then(res=>{
    //   console.log(res);
    //   //this.router.navigate(['/mydashboard']);
    // })
    // .catch(err=>{
    //   console.log(err);
    //   //this.auth.logout();
    //   this.router.navigate(['/login'])
    // });
    
    //console.log(await this.auth.loadUserReturn());

    
    
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
