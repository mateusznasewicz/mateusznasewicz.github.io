import { AfterViewInit, Component, ElementRef, inject, OnDestroy } from '@angular/core';
import { gsap } from 'gsap';
import SplitText from 'gsap/src/SplitText';
import { NavigationService } from '../../service/navigation';
import { ScrollTrigger } from 'gsap/src/ScrollTrigger';


@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About implements AfterViewInit, OnDestroy {

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
            this.navState.setActiveSection('about');
          }
        }
      });
    
      const introTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.intro-section',
            start: 'top 80%',
            end: 'bottom top',
            toggleActions: 'play none none reverse',
        },
      });

      introTl.from('.intro-text-title', {
        xPercent: -200,
        duration: 1,
        ease: 'power3.out'
      })
      .from('.intro-visual .wireframe-model', {
          scale: 0.6,
          opacity: 0.2,
          filter: 'blur(5px)',
          duration: 1.5,
          ease: 'power3.out',
      },"-=0.6")

      gsap.to('.intro-visual .wireframe-model', {
          y: 150,
          ease: 'none',
          scrollTrigger: {
              trigger: '.intro-section',
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
          }
      });

      let introTextSplit = new SplitText(".highlight-text", {type:"chars, words"})
      introTl.from(introTextSplit.chars, {opacity:0, stagger:0.01, duration:0.1}, 0)
      
      gsap.to(introTextSplit.words, {
        '-webkit-text-stroke-color': '#FFFFFF',
        color: '#FFFFFF', 
        stagger: 0.1,
        ease: 'none',
        scrollTrigger: {
            trigger: '.intro-section',
            start: 'top top',
            end: 'center center',
            scrub: 1,
        }
      });

    }, this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.ctx.revert(); 
  }

}
