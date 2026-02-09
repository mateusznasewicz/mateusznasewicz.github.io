import { AfterViewInit, Component, ElementRef, OnDestroy, inject } from '@angular/core';
import { gsap } from 'gsap';
import { NavigationService } from '../../service/navigation';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


@Component({
  selector: 'app-code',
  imports: [],
  templateUrl: './code.html',
  styleUrl: './code.scss',
})
export class Code implements AfterViewInit, OnDestroy{

  private navState = inject(NavigationService);
  private el = inject(ElementRef);
  ctx !: gsap.Context;
  
  ngAfterViewInit(): void {
    this.ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.create({
        trigger: this.el.nativeElement,
        start: 'top center',
        end: 'bottom center',
        onToggle: (self) => {
          if (self.isActive) {
            this.navState.setActiveSection('code');
          }
        }
      });
      
    let mm = gsap.matchMedia();

    // Desktop animation
    mm.add("(min-width: 769px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.code-section',
          start: 'top 60%',
          toggleActions: 'play none none reverse'
        }
      });

      tl.from('.code-text', {
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      })
      .from('.ide-wrapper', {
        x: 100,
        opacity: 0,
        scale: 0.95,
        duration: 0.8,
        ease: 'power3.out'
      }, "-=0.6");
    });

    // Mobile animation
    mm.add("(max-width: 768px)", () => {
      gsap.from('.code-text', {
        scrollTrigger: {
          trigger: '.code-text',
          start: 'top center',
          toggleActions: 'play none none reverse'
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      });

      gsap.from('.ide-wrapper', {
        scrollTrigger: {
          trigger: '.ide-wrapper',
          start: 'top center',
          toggleActions: 'play none none reverse'
        },
        x: 50,
        opacity: 0,
        scale: 0.95,
        duration: 0.8,
        ease: 'power3.out'
      });
    });

    }, this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.ctx.revert();
  }

}

