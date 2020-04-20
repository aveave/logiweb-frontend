import { Component, OnInit } from '@angular/core';

import { DriverService } from 'src/service/driver.service';
import { Driver } from 'src/model/driver.model';

@Component({
    selector: 'app-create-driver',
    templateUrl: './create-driver.component.html',
    styleUrls: ['./create-driver.component.css']
})
export class CreateDriverComponent implements OnInit {

    driver: Driver = new Driver();
    submitted = false;

    constructor(private driverService: DriverService) {}

    ngOnInit() {
    }

    newDriver(): void {
        this.submitted = false;
        this.driver = new Driver();
    }

    save() {
        this.driverService.createDriver(this.driver)
        .subscribe(data => console.log(data), error => console.log(error));
        this.driver = new Driver;
    }

    onSubmit() {
        console.log('here');
        this.submitted = true;
        this.save();
    }
}