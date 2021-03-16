import { Component, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { Order } from '../order.model';
import { OrderService } from '../../../service/order.service';

@Component({
    selector: 'app-create-order',
    templateUrl: './create-order.component.html',
    styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent {

    @ViewChild('statusInput')
    statusInputRef: ElementRef;

    @ViewChild('loadDateInput')
    loadDateInputRef: ElementRef;

    @ViewChild('planedDeliveryDateInput')
    planedDeliveryDateInputRef: ElementRef;

    @ViewChild('actualDeliveryDateInput')
    actualDeliveryDateInputRef: ElementRef;

    @Output()
    orderCreated = new EventEmitter<Order>();

    order:Order = {status: '', loadDate: '', actualDeliveryDate: '', planedDeliveryDate: '', cargos: []};

    constructor(private orderService: OrderService) {

    }

    onCreateOrder() {
        console.log("inside create");
        console.log(this.statusInputRef.nativeElement.value);
        console.log(this.statusInputRef.nativeElement);
        console.log(this.loadDateInputRef.nativeElement);
        console.log(this.planedDeliveryDateInputRef.nativeElement);
        this.order.status = this.statusInputRef.nativeElement.value;
        this.order.loadDate = this.loadDateInputRef.nativeElement.value;
        this.order.planedDeliveryDate = this.planedDeliveryDateInputRef.nativeElement.value;
        this.order.actualDeliveryDate = this.actualDeliveryDateInputRef.nativeElement.value;
        console.log(this.order);
        this.orderService.orderCreated.emit(this.order);
    }

}