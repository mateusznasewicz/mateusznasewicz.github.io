import { Component, inject, signal, WritableSignal } from '@angular/core';
import { NavigationService } from '../../service/navigation';

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

  scrollToSection(id: string){
    const element = document.getElementById(id);
    
    if (element) {
      element.scrollIntoView({
        behavior: 'auto',
        block: 'center'
      });
    }
  }
  
}
