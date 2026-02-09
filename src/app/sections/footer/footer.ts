import { AfterViewInit, Component, OnDestroy, inject, ElementRef } from '@angular/core';
import { NavigationService } from '../../service/navigation';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';


@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer implements AfterViewInit, OnDestroy{
  private navState = inject(NavigationService);
  private el = inject(ElementRef);
  ctx!: gsap.Context;

  ngAfterViewInit(): void {
    this.ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.create({
        trigger: this.el.nativeElement,
        start: 'top center',
        end: 'bottom center',
        onToggle: (self) => {
          if (self.isActive) {
            this.navState.setActiveSection('contact');
          }
        }
      });

  }, this.el.nativeElement);
  }

  ngOnDestroy() {
    this.ctx.revert(); 
  }
}
