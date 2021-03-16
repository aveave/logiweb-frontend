import { Component, OnInit } from '@angular/core';

import { Order } from '../orders/order.model';
import { OrderService } from '../../service/order.service';

@Component({
    selector: 'app-orders',
    templateUrl: './orders.component.html',
    styleUrls: ['orders.component.css'],
    providers: [OrderService]
})
export class OrdersComponent implements OnInit {

    private orders: Order[] = [];

    selectedOrderOnList: Order;

    isCreateNewOrder: boolean;

    constructor(private orderService: OrderService) {
        this.orders = orderService.getOrders();
     }

    ngOnInit() { 
        this.orderService.orderSelected.subscribe(
            (order: Order) => {
                this.selectedOrderOnList = order;
            }
        )

        this.orderService.orderCreated.subscribe(
            (order: Order) => {
                console.log('inside orderCreated');
                this.orderService.addNewOrder(order);
                console.log(this.orderService.getOrders());
            }
        )
    }

}