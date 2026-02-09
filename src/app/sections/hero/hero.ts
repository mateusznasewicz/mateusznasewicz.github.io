import { AfterViewInit, Component, OnDestroy, inject, ElementRef } from '@angular/core';
import { gsap } from 'gsap'
import { NavigationService } from '../../service/navigation';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero implements AfterViewInit, OnDestroy{

  private navState = inject(NavigationService);
  private el = inject(ElementRef);
  ctx!: gsap.Context;

  ngAfterViewInit(): void {
    
    this.ctx = gsap.context(() => {
      
      const entryTl = gsap.timeline();
      entryTl.from('.hero-line span', {
        y: 150,
        opacity: 0,
        skewY: 10,
        duration: 1.2,
        stagger: 0.1,
        ease: 'power4.out'
      });

    }, this.el.nativeElement);
  }

  ngOnDestroy() {
    this.ctx.revert(); 
  }

}
