// import { Directive, HostBinding, HostListener } from '@angular/core';

// @Directive({
//   selector: '[appDropdown]'
// })
// export class Dropdown {

//  @HostBinding('class.open') isOpen = false;

//   constructor() { }

//   @HostListener('click') toggleOpen() {
//     this.isOpen = !this.isOpen;
//   }

// }

// dropdown.directive.ts
import {
  Directive,
  ElementRef,
  HostListener,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
  standalone: true
})
export class Dropdown {

  private isOpen = false;
  private menu!: HTMLElement;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.menu = this.el.nativeElement.querySelector('.dropdown-menu');
  }

  @HostListener('click', ['$event'])
  toggle(event: Event) {
    event.stopPropagation();
    this.isOpen ? this.close() : this.open();
  }

  @HostListener('document:click')
  close() {
    this.isOpen = false;
    this.renderer.removeClass(this.menu, 'show');
  }

  private open() {
    this.isOpen = true;
    this.renderer.addClass(this.menu, 'show');
  }
}
