import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector: '[testeDirective]'
})
export class testeDirective{
    constructor(private el: ElementRef){}

    @HostListener('mouseenter') onMouseEnter(){
        this.highlight('red')
    }

    highlight(color: string){
        this.el.nativeElement.style.backgroundColor = color;
    }
}
