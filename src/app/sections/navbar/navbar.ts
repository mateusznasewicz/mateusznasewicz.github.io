import { Component, inject, signal, WritableSignal } from '@angular/core';
import { NavigationService } from '../../service/navigation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {

  private navigation = inject(NavigationService)
  activeSectionId = this.navigation.activeSectionId;
  ctx !: gsap.Context;

  navItems = [
    { id: 'hero', label: 'START' },
    { id: 'about', label: 'ABOUT' },
    { id: 'projects', label: 'WORK' },
    { id: 'tech', label: 'STACK' },
    { id: 'code', label: 'CODE' },
    { id: 'contact', label: 'CONTACT' }
  ];
  
  ngOnDestroy(): void {
    this.ctx.revert();
  }

  scrollToSection(sectionId: string){
    const introTrigger = ScrollTrigger.getById('intro-pin');

    if (sectionId === 'hero') {
      if (introTrigger) {
        gsap.to(window, { scrollTo: introTrigger.start, duration: 0.2, ease: 'power2.inOut' });
      }
    } 
    
    else if (sectionId === 'about') {
      if (introTrigger) {
        gsap.to(window, { 
          scrollTo: introTrigger.end, 
          duration: 0.2, 
          ease: 'power2.inOut', 
          onComplete: () => { this.navigation.setActiveSection(sectionId);} });
      }
    } 
    
    else {
      gsap.to(window, { 
        scrollTo: { y: `#${sectionId}`, offsetY: 0 }, 
        duration: 0.2, 
        ease: 'power2.inOut' 
      });
    }

  }
  
}
