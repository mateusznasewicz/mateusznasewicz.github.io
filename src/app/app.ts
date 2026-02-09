import { Component, signal, inject, ElementRef } from '@angular/core';
import { Hero } from './sections/hero/hero';
import { About } from './sections/about/about';
import { Code } from './sections/code/code';
import { Footer } from './sections/footer/footer';
import { Navbar } from './sections/navbar/navbar';
import { TechRows } from './sections/tech/tech';
import { Work } from './sections/work/work';
import { gsap } from 'gsap';
import { NavigationService } from './service/navigation';
import { SplitText } from 'gsap/src/SplitText';

@Component({
  selector: 'app-root',
  imports: [Hero, About, Code, Footer, Navbar, TechRows, Work],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App{
  protected readonly title = signal('personal-website');

  private el = inject(ElementRef);
  private navState = inject(NavigationService);
  
  ngAfterViewInit() {
    const ctx = gsap.context(() => {
  
      let split = new SplitText('.about-layer .highlight-text', {
          type: "chars, words",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.cinematic-wrapper',
          start: 'top top',
          end: '+=300%', 
          pin: true, 
          scrub: 1,
          refreshPriority: 1,
          id: 'intro-pin',

          onUpdate: (self) => {
            if (self.progress < 0.5) {
              this.navState.setActiveSection('hero');
            } else {
              this.navState.setActiveSection('about');
            }
          }
        }
      });

      tl.to('.hero-layer .hero-content', {
        scale: 2,
        filter: 'blur(20px)',
        duration: 1,
        ease: 'power2.in'
      })

      .to('.about-layer .intro-section', {
        scale: 1,
        filter: 'blur(0px) brightness(1)',
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        onComplete: () => {
            gsap.set('.about-layer', { pointerEvents: 'all' }); 
        }
      })

      .from(split.words, 
      { 
        opacity: 0,
        stagger: 0.05,
        duration: 1,
        ease: 'power2.out',
      }, 
      "-=0.5");

      }, this.el.nativeElement);
  }
}
