import { Component, OnInit, Input } from '@angular/core';

import { Driver } from 'src/model/driver.model';
import { DriverService } from 'src/service/driver.service';
import { DriverListComponent } from 'src/driver/driver-list/driver-list.component';

@Component({
    selector: 'app-driver-details',
    templateUrl: './driver-details.component.html',
    styleUrls: ['./driver-details.component.css']
})
export class DriverDetailsComponent implements OnInit {

    @Input() driver: Driver;

    constructor(private driverService: DriverService, private driverList: DriverListComponent) {}

    ngOnInit() {}

    updateDriver() {
        this.driverService.updateDriver(this.driver)
        .subscribe(
            data => {
                console.log(data);
                this.driver = data as Driver;
            },
            error => console.log(error));
    } 

    deleteDriver() {
        this.driverService.deleteDriver(this.driver.id)
        .subscribe(data => {
            console.log(data);
            this.driverList.reloadDriverList();
        },
        error => console.log(error));
    }

}