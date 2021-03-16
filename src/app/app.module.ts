import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { DriverListComponent } from '../driver/driver-list/driver-list.component';
import { CreateDriverComponent } from '../driver/create-driver/create-driver.component';
import { SearchDriverComponent } from '../driver/search-driver/search-driver.component';
import { DriverDetailsComponent } from '../driver/driver-details/driver-details.component';
import { NgbdDriverTableComponent } from '../driver/table/driver-table.component';
import { DriverItemComponent } from '../driver/table/driver-item/driver-item.component';

import { DriverService } from '../service/driver.service';
import { ProfileComponent } from 'src/auth/profile/profile.component';
import { RegisterComponent } from 'src/auth/register/register.component';
import { LoginComponent } from 'src/auth/login/login.component';
import { HomeComponent } from 'src/auth/home/home.component';
import { BoardDriverComponent } from 'src/auth/board-driver/board-driver.component';
import { BoardEmployeeComponent } from 'src/auth/board-employee/board-employee.component';
import { BoardModeratorComponent } from 'src/auth/board-moderator/board-moderator.component';
import { HeaderComponent } from './header/header.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderDetailsComponent } from './orders/order-details/order-details.component';
import { OrderListComponent } from './orders/order-list/order-list.component';
import { OrderItemComponent } from './orders/order-list/order-item/order-item.component';
import { CreateOrderComponent } from './orders/create-order/create-order.component';
import { BodyComponent } from './body/body.component';
import { HighlightRowDirective } from './directives/highlight-row/highlight-row.directive';
import { UnlessDirective } from './directives/unless/unless.directive';
import { DropdownDirective } from './directives/dropdown/dropdown.directive';

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
    DriverItemComponent,
    ProfileComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    BoardDriverComponent,
    BoardEmployeeComponent,
    BoardModeratorComponent,
    HeaderComponent,
    OrdersComponent,
    OrderDetailsComponent,
    OrderListComponent,
    OrderItemComponent,
    CreateOrderComponent,
    BodyComponent,
    HighlightRowDirective,
    UnlessDirective,
    DropdownDirective
  ],
  providers: [DriverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
