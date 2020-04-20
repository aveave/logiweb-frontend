import { Component, OnInit } from '@angular/core';

import { DriverService } from 'src/service/driver.service';
import { Driver } from 'src/model/driver.model';

@Component({
    selector: 'app-search-driver',
    templateUrl: './search-driver.component.html',
    styleUrls: ['./search-driver.component.css']
})
export class SearchDriverComponent implements OnInit {

    id: number
    driver: Driver;

    constructor(private driverService: DriverService) {}

    ngOnInit() {}

    searchDrivers() {
        this.driverService.getDriver(this.id)
        .subscribe( driver => {
            console.log(driver);
            this.driver = driver;
        }, error => {
            console.log(error);
        })
    }

    onSubmit() {
        this.searchDrivers();
    }
}