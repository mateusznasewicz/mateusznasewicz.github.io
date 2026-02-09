import { AfterViewInit, Component, OnDestroy, OnInit, ElementRef, inject } from '@angular/core';
import { gsap } from 'gsap';
import { TechDataService } from '../../service/tech-data';
import { Tech } from '../../models/tech';
import { NavigationService } from '../../service/navigation';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


@Component({
  selector: 'app-tech',
  imports: [],
  templateUrl: './tech.html',
  styleUrl: './tech.scss',
})
export class TechRows implements AfterViewInit, OnDestroy, OnInit{

  private navState = inject(NavigationService);
  private el = inject(ElementRef);
  ctx !: gsap.Context;
  techRows : Tech[][] = [];

  constructor(private techService: TechDataService){}
  
  ngOnInit(): void {
    this.techService.getTechs().subscribe(data => { 
      this.techRows = data; 
      this.adjustLayout();
    });
  }

  ngAfterViewInit(): void {
    this.ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.create({
        trigger: this.el.nativeElement,
        start: 'top center',
        end: 'bottom center',
        onToggle: (self) => {
          if (self.isActive) {
            this.navState.setActiveSection('tech');
          }
        }
      });

      const rows = gsap.utils.toArray('.tech-track');
      rows.forEach((row: any, i) => {
        const direction = i % 2 === 0 ? -1 : 1; 
        
        gsap.to(row, {
          xPercent: 50 * direction, 
          ease: 'none',
          scrollTrigger: {
            trigger: '.tech-streams-wrapper',
            start: 'top bottom', 
            end: 'bottom top',   
            scrub: 1             
          }
        });

      });

    }, this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.ctx.revert();
  }

  private adjustLayout() {
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      const allItems = this.techRows.flat();
      this.techRows = this.chunkArray(allItems, 3); 
    } else {
      this.techRows = [...this.techRows];
    }
  }

  private chunkArray(array: any[], size: number): any[][] {
    const results = [];
    for (let i = 0; i < array.length; i += size) {
      results.push(array.slice(i, i + size));
    }
    return results;
  }

}
