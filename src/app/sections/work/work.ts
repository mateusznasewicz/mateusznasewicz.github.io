import { AfterViewInit, Component, OnDestroy, OnInit, inject, ElementRef } from '@angular/core';
import { ProjectDataService } from '../../service/project-data';
import { Project } from '../../models/project';
import { gsap } from 'gsap';
import { NavigationService } from '../../service/navigation';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


@Component({
  selector: 'app-work',
  imports: [],
  templateUrl: './work.html',
  styleUrl: './work.scss',
})
export class Work implements AfterViewInit, OnDestroy, OnInit{

  private navState = inject(NavigationService);
  private el = inject(ElementRef);
  ctx !: gsap.Context
  projects: Project[] = [];
  constructor(private projectService: ProjectDataService){}
  
  ngOnInit(): void {
    this.projectService.getProjects().subscribe(data => {
      this.projects = data;
    });
  }
  
  ngAfterViewInit(): void {
    this.ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.project-card') as HTMLElement[];
      const stackedSection = document.getElementById('projects')!;

      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.create({
        trigger: this.el.nativeElement,
        start: 'top center',
        end: () => `+=${(cards.length+1) * 100}%`,
        onToggle: (self) => {
          if (self.isActive) {
            this.navState.setActiveSection('projects');
          }
        }
      });

      cards.forEach((card, i) => {
        gsap.set(card, {
          zIndex: cards.length - i
        });
      })

      const stackTl = gsap.timeline({
        scrollTrigger: {
          trigger: stackedSection,
          start: 'top top',
          end: () => `+=${cards.length * 100}%`,
          pin: true,
          scrub: 1,
          refreshPriority: 0
        }
      });

      (cards.slice(0, -1) as HTMLElement[]).forEach((card, i) => {
        
        stackTl.to(card, {
          yPercent: -120,
          scale: 0.95,
          duration: 1,
          ease: 'power2.inOut'
        });
        
      });

    }, this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.ctx.revert();
  }
}
