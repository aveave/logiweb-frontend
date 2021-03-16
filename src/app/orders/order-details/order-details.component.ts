import { Component, OnInit, Input, Output, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { Order } from '../order.model';
import { Cargo } from 'src/model/cargo.model';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  constructor() { }

  @ViewChild("id")
  idInputRef: ElementRef;

  @ViewChild("statusInput")
  statusInputRef: ElementRef;

  @ViewChild("loadDateInput")
  loadDateInputRef: ElementRef;

  @ViewChild("planedDeliveryDateInput")
  planedDeliveryDateInputRef: ElementRef

  @ViewChild("actualDeliveryDateInput")
  actualDeliveryDateinputRef: ElementRef

  @Input() order: Order;

  @Output() orderChanged = new EventEmitter<Order>();

  currentOrder: Order = { status: '', loadDate: '', actualDeliveryDate: '', planedDeliveryDate: '', cargos: [] };
  ngOnInit(): void {
  }

  onUpdateOrder() {
    console.log("content" + this.statusInputRef.nativeElement.value)
    this.currentOrder.status = this.statusInputRef.nativeElement.value;
    this.currentOrder.loadDate = this.loadDateInputRef.nativeElement.value;
    this.currentOrder.actualDeliveryDate = this.actualDeliveryDateinputRef.nativeElement.value;
    this.currentOrder.planedDeliveryDate = this.planedDeliveryDateInputRef.nativeElement.value;

    this.orderChanged.emit(this.currentOrder);
  }

}
