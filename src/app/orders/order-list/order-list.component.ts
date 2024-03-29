import { Component, OnInit } from '@angular/core';

import { Order } from '../order.model';
import { OrderService } from '../../../service/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders: Order[] = [];

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orders = this.orderService.getOrders();
    this.orderService.ordersChanged.subscribe(
      (orders: Order[]) => {
        this.orders = orders;
      }
    )
  }
}
