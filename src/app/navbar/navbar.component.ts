import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnChanges {
  isLogin: boolean = false;
  constructor(private _AuthService: AuthService) {}

  ngOnInit(): void {
    this._AuthService.userData.subscribe(() => {
      if (this._AuthService.userData.getValue() != null) {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    });
  }
  callLogout() {
    this._AuthService.logOut();
  }
  ngOnChanges(): void {}
}
