import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateDriverComponent } from '../driver/create-driver/create-driver.component';
import { LoginComponent } from 'src/auth/login/login.component';
import { RegisterComponent } from 'src/auth/register/register.component';
import { ProfileComponent } from 'src/auth/profile/profile.component';
import { AppComponent } from './app.component';
import { NgbdDriverTableComponent } from 'src/driver/table/driver-table.component';
import { DriverDetailsComponent } from 'src/driver/driver-details/driver-details.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
    { path: 'home', component: AppComponent },
    { path: 'drivers', component: NgbdDriverTableComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'driver', component: CreateDriverComponent },
    { path: 'driver-details', component: DriverDetailsComponent },
    { path: 'orders', component: OrdersComponent }
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
export class AppRoutingModule { }