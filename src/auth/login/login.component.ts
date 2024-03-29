import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/service/security/auth.service';

import { TokenStorageService } from 'src/service/security/token-storage.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    form: any = {};
    isLoggedIn = false;
    isLoginFailed = false;
    errorMessage = '';
    roles: string[] = [];

    constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }

    ngOnInit() {
        if (this.tokenStorage.getToken()) {
            this.isLoggedIn = true;
            this.roles = this.tokenStorage.getUser().roles;
        }
    }

    onSubmit() {
        this.authService.login(this.form)
            .subscribe(data => {
                console.log(data);
                this.tokenStorage.saveToken(data.accessToken);
                this.tokenStorage.saveUser(data);
                this.isLoginFailed = false;
                this.isLoggedIn = true;
                this.roles = this.tokenStorage.getUser().roles;
            }, err => {
                this.errorMessage = err.error.message;
                this.isLoginFailed = true;
            })
    }

    reloadPage() {
        window.location.reload();
    }


}