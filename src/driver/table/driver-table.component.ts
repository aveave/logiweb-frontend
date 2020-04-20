import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { Driver } from 'src/model/driver.model';

import { DriverService } from 'src/service/driver.service';

@Component({
    selector: 'app-driver-table',
    templateUrl: './driver-table.component.html',
    styleUrls: ['./driver-table.component.css']
})
export class NgbdDriverTableComponent implements OnInit{

    driversList: Observable<Driver[]>;

    // @Input() driversList: any;

    constructor(private router: Router, private driverService: DriverService){}

    ngOnInit() {
        this.driversList = this.driverService.getDriversList();
    }
}