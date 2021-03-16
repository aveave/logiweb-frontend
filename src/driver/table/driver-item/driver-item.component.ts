import { Component, Input } from '@angular/core';
import { Driver } from 'src/model/driver.model';

@Component({
    selector: 'app-driver-item',
    templateUrl: './driver-item.component.html',
    styleUrls: ['./driver-item.component.css']
})
export class DriverItemComponent {

    @Input() driver: Driver;


}