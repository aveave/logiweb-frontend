import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/service/security/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  private roles: string[];
  isLoggedIn = false;
  showEmployeeBoard = false;
  showDriverBoard = false;
  username: string;


  constructor(private tokenServiceStorage: TokenStorageService) { }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenServiceStorage.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenServiceStorage.getUser();
      this.roles = user.roles;

      this.showEmployeeBoard = this.roles.includes('ROLE_EMPLOYEE');
      this.showDriverBoard = this.roles.includes('ROLE_DRIVER');

      this.username = user.username;

    }
  }

  logout() {
    this.tokenServiceStorage.signOut();
    window.location.reload();
  }


}
