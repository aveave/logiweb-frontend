import { Directive, HostListener, HostBinding, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {

    constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

    @HostBinding('class.open') isOpen: boolean = false;

    @HostListener('click') toggleOpen(eventData: Event){
        console.log(123);
        this.isOpen = !this.isOpen;
    } 

}