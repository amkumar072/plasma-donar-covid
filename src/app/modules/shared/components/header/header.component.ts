import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Constant } from 'src/app/constants/constant';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isVisibleLogout = false;

  constructor(
    private authService: AuthService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.authService.userIsAuthenticated.subscribe(result => {
      if (result) {
        this.isVisibleLogout = true;
      }
    });
  }

  home() {
    this.navCtrl.navigateBack(Constant.HOME);
  }

  async logOut() {
    await this.authService.logOutService();
    window.location.reload();
  }

}
