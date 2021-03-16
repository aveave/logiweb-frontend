import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
    selector: '[appHighlightRow]'
})
export class HighlightRowDirective implements OnInit {

    @Input('appHighlightRow') 
    defaultBorder: string = '';
    
    @Input()
    highlightBorder: string = 'solid';

    constructor(private elRef: ElementRef, private renderer: Renderer2) {
    }

    ngOnInit() { 
        this.border = this.defaultBorder;
    }

    @HostBinding('style.border') border: string = '';

    @HostListener('mouseenter') mouseover(eventData: Event) {
        this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'green');
        this.border = this.highlightBorder;
    }

    @HostListener('mouseleave') mouseleave(eventData: Event) {
        this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
        this.border = this.defaultBorder;
    }
}