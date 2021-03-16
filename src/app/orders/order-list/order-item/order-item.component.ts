import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Order } from '../../order.model';
import { Cargo } from '../../../../model/cargo.model';
import { OrderService } from 'src/service/order.service';

@Component({
    selector: 'app-order-item',
    templateUrl: './order-item.component.html',
    styleUrls: ['order-item.component.css']
})
export class OrderItemComponent implements OnInit {

    @Input() currentOrder: {status: string, loadDate: string, planedDeliveryDate: string, actualDeliveryDate: string, cargos: Cargo[] }

    @Output() orderSelected = new EventEmitter<Order>();

    constructor(private orderService: OrderService) { }

    onOrderSelected() {
        this.orderService.orderSelected.emit(this.currentOrder);
    }

    ngOnInit() { }
}