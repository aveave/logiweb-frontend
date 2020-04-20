import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DriverListComponent } from '../driver/driver-list/driver-list.component';
import { CreateDriverComponent } from '../driver/create-driver/create-driver.component';
import { LoginComponent } from 'src/auth/login/login.component';
import { RegisterComponent } from 'src/auth/register/register.component';
import { ProfileComponent } from 'src/auth/profile/profile.component';
import { AppComponent } from './app.component';
import { NgbdDriverTableComponent } from 'src/driver/table/driver-table.component';

const routes = [
    { path: 'drivers', component: NgbdDriverTableComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'driver', component: CreateDriverComponent}
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})

export class AppRoutingModule {}