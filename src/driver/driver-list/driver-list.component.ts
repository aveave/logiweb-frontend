import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Driver } from 'src/model/driver.model';

import { DriverService } from 'src/service/driver.service';

@Component({
    selector: 'app-driver-list',
    templateUrl: './driver-list.component.html',
    styleUrls: ['./driver-list.component.css']
})

export class DriverListComponent implements OnInit{

    drivers: Observable<Driver[]>;

    constructor(private router: Router, private driverService: DriverService) {}

    ngOnInit() {
        this.reloadDriverList();
    };

    reloadDriverList() {
        this.drivers = this.driverService.getDriversList();
    }
}