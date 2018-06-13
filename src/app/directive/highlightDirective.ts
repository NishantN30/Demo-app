import { Directive, ElementRef, HostListener, Input, HostBinding } from '@angular/core'

@Directive({ 
    selector: '[appHighlight]'
})
export class HighlightDirective {
    @Input('defaultColor') defaultColor : string

    @HostBinding('style.backgroundColor') backgroundColor : any;

    @HostListener('mouseenter') mouseenter(eventdata) {
        this.backgroundColor = this.defaultColor;
    }

    @HostListener('mouseleave') mouseleave(eventdata) {
        this.backgroundColor = 'transparent'
    }
    constructor(private elRef : ElementRef) {
        this.elRef.nativeElement.style.backgroundColor = 'transparent'
        
    }
}