import { Component, OnInit } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen';
import * as LiveUpdates from '@capacitor/live-updates';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
   this.initializeApp();
  }
  async initializeApp() {
    const result = await LiveUpdates.sync();
    if (result.activeApplicationPathChanged) {
      await LiveUpdates.reload();
    }
    else {
      await SplashScreen.hide();
    }
  }
}
