import { EventEmitter } from '@angular/core';

import { Order } from '../app/orders/order.model'
import { Cargo } from 'src/model/cargo.model';

export class OrderService {

    ordersChanged = new EventEmitter<Order[]>();

    orderSelected = new EventEmitter<Order>();

    orderCreated = new EventEmitter<Order>();

    private orders: Order[] = [
        new Order('delivered', '24.05.2020', '30.05.2020', '01.06.2020', [new Cargo(1, 'Cargo 1', 213, 'Delivered'), new Cargo(2, 'Cargo 2', 532, 'Planned')]),
        new Order('in progress', '11.05.2020', '30.05.2020', '01.06.2020', [new Cargo(1, 'Cargo 1', 12, 'In Progress'), new Cargo(2, 'Cargo 2', 453, 'Planned')])
      ];

    getOrders() {
        return this.orders.slice();
    }

    addNewOrder(order: Order) {
        this.orders.push(order);
        console.log
        this.ordersChanged.emit(this.orders.slice());
    }

}