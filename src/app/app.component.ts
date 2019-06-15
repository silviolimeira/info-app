import { Component } from "@angular/core";

// import { Platform } from "@ionic/angular";
// import { SplashScreen } from "@ionic-native/splash-screen/ngx";
// import { StatusBar } from "@ionic-native/status-bar/ngx";

import { Observable } from "rxjs";
import { AngularFireDatabase } from "@angular/fire/database";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html"
})
export class AppComponent {
  infos: Observable<any[]>;

  constructor(
    // private platform: Platform,
    // private splashScreen: SplashScreen,
    // private statusBar: StatusBar
    private db: AngularFireDatabase
  ) {
    this.infos = this.db.list("/infos/-LhAkCZR7_6XwHGQSVmZ").valueChanges();

    this.initializeApp();
  }

  initializeApp() {
    // this.platform.ready().then(() => {
    //   this.statusBar.styleDefault();
    //   this.splashScreen.hide();
    // });
    // this.infos.subscribe()
  }
}
