import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { DriverListComponent } from '../driver/driver-list/driver-list.component';
import { CreateDriverComponent } from '../driver/create-driver/create-driver.component';
import { SearchDriverComponent } from '../driver/search-driver/search-driver.component';
import { DriverDetailsComponent } from '../driver/driver-details/driver-details.component';
import { NgbdDriverTableComponent } from '../driver/table/driver-table.component';

import { DriverService } from '../service/driver.service';
import { ProfileComponent } from 'src/auth/profile/profile.component';
import { RegisterComponent } from 'src/auth/register/register.component';
import { LoginComponent } from 'src/auth/login/login.component';
import { HomeComponent } from 'src/auth/home/home.component';
import { BoardDriverComponent } from 'src/auth/board-driver/board-driver.component';
import { BoardEmployeeComponent } from 'src/auth/board-employee/board-employee.component';
import { BoardModeratorComponent } from 'src/auth/board-moderator/board-moderator.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  declarations: [
    AppComponent,
    DriverListComponent,
    CreateDriverComponent,
    SearchDriverComponent,
    DriverDetailsComponent,
    NgbdDriverTableComponent,
    ProfileComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    BoardDriverComponent,
    BoardEmployeeComponent,
    BoardModeratorComponent
  ],
  providers: [DriverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
