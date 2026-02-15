import { AfterViewInit, Component, OnDestroy, inject, ElementRef } from '@angular/core';
import { gsap } from 'gsap'

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero implements AfterViewInit, OnDestroy{

  private el = inject(ElementRef);
  ctx!: gsap.Context;

  ngAfterViewInit(): void {
    window.addEventListener('load', () => {
      this.heroAnimation();
    });
  }

  heroAnimation(): void {
    this.ctx = gsap.context(() => {
      
      const entryTl = gsap.timeline();
      gsap.set('.hero-content', { transformOrigin: 'center', visibility: 'visible' });

      entryTl.from('.hero-content', {
        scaleX: 0,
        duration: 0.8,
        ease: 'power4.inOut'
      })
      .from('.hero-content', {
        scaleY: 0.02,
        duration: 0.6,
        ease: 'power2.out'
      })
      .from('.hero-line span', {
        scale: 1.5,
        opacity: 0,
        filter: 'blur(10px)',
        duration: 0.8,
        stagger: {
          amount: 0.3,
          from: "center"
        },
        ease: 'back.out(1.7)',
        onComplete: () => { gsap.set('.hero-meta', { visibility: 'visible' }) }
      }, "-=0.4");

    }, this.el.nativeElement);
  }

  ngOnDestroy() {
    this.ctx.revert(); 
  }

}
