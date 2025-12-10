import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, OnInit, NgZone, ChangeDetectorRef, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import SplitText from 'gsap/src/SplitText';
import { Project } from '../models/project';
import { ProjectDataService } from '../service/project-data';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, SplitText);

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.html',
  styleUrls: ['./portfolio.scss']
})
export class PortfolioComponent implements AfterViewInit, OnDestroy, OnInit {
  // References to DOM elements for GSAP
  @ViewChild('mainContainer', { static: true }) mainContainer!: ElementRef;
  @ViewChild('stackedSection', { static: true }) stackedSection!: ElementRef;

  ctx: any; // GSAP Context for cleanup
  projects: Project[] = [];

  techRows = [
    // Rząd 1: Backend & Core
    [
      { name: 'Java 21', icon: 'assets/icons/java.svg' },
      { name: 'Spring Boot', icon: 'assets/icons/spring.svg' },
      { name: 'Hibernate', icon: 'assets/icons/hibernate.svg' },
      { name: 'PostgreSQL', icon: 'assets/icons/postgres.svg' },
      { name: 'Microservices', icon: 'assets/icons/micro.svg' },
      { name: 'Kafka', icon: 'assets/icons/kafka.svg' }
    ],
    // Rząd 2: Frontend
    [
      { name: 'Angular 17', icon: 'assets/icons/angular.svg' },
      { name: 'TypeScript', icon: 'assets/icons/ts.svg' },
      { name: 'RxJS', icon: 'assets/icons/rxjs.svg' },
      { name: 'SCSS', icon: 'assets/icons/sass.svg' },
      { name: 'Tailwind', icon: 'assets/icons/tailwind.svg' },
      { name: 'GSAP', icon: 'assets/icons/gsap.svg' }
    ],
    // Rząd 3: DevOps & Tools
    [
      { name: 'Docker', icon: 'assets/icons/docker.svg' },
      { name: 'Kubernetes', icon: 'assets/icons/k8s.svg' },
      { name: 'AWS', icon: 'assets/icons/aws.svg' },
      { name: 'Jenkins', icon: 'assets/icons/jenkins.svg' },
      { name: 'Git', icon: 'assets/icons/git.svg' },
      { name: 'IntelliJ', icon: 'assets/icons/intellij.svg' }
    ]
  ];

  navItems = [
    { id: 'hero', label: 'START' },
    { id: 'about', label: 'ABOUT' },
    { id: 'projects', label: 'WORK' },
    { id: 'tech', label: 'STACK' },
    { id: 'code', label: 'CODE' },
    { id: 'contact', label: 'CONTACT' }
  ];

  activeSectionIndex: WritableSignal<number> = signal(0);

  constructor(private projectService: ProjectDataService, private cdr: ChangeDetectorRef, private ngZone: NgZone) {}

  ngOnInit(): void {
    this.projectService.getProjects().subscribe(data => {
      this.projects = data;
    });
  }

  ngAfterViewInit() {
    this.ctx = gsap.context(() => {
      
      // 1. HERO: Staggered Text Reveal
      const heroTl = gsap.timeline();
      heroTl.from('.hero-line span', {
        y: 150,
        opacity: 0,
        skewY: 10,
        duration: 1.2,
        stagger: 0.1,
        ease: 'power4.out'
      });

      // --- 2. INTRO SECTION ANIMATION (Activation & Zoom) ---

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

      // 3. PROJECTS:
      const cards = gsap.utils.toArray('.project-card') as HTMLElement[];

      cards.forEach((card, i) => {
        gsap.set(card, {
          zIndex: cards.length - i
        });
      })

      const stackTl = gsap.timeline({
        scrollTrigger: {
          trigger: this.stackedSection.nativeElement,
          start: 'top top',
          end: () => `+=${cards.length * 100}%`,
          pin: true,
          scrub: 1,
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

      // 4. TECH STACK: Parallax & Scale
      const rows = gsap.utils.toArray('.tech-track');

      rows.forEach((row: any, i) => {
        const direction = i % 2 === 0 ? -1 : 1; 
        
        gsap.to(row, {
          xPercent: 20 * direction, 
          ease: 'none',
          scrollTrigger: {
            trigger: '.tech-streams-wrapper',
            start: 'top bottom', 
            end: 'bottom top',   
            scrub: 1             
          }
        });
      });

      // 5. IDE SECTION ANIMATION
      const codeTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.code-section',
          start: 'top 60%',
          toggleActions: 'play none none reverse'
        }
      });

      codeTl
        .from('.code-text', {
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

        //navbar

        this.navItems.forEach((item, index) => {

          ScrollTrigger.create({
              trigger: `#${item.id}`,
              start: 'top center',
              end: 'bottom center',
              onToggle: (self) => {
                  if (self.isActive) {
                      this.activeSectionIndex.set(index);
                  }
              }
          });
        });
          }, this.mainContainer);
  }

  ngOnDestroy() {
    if (this.ctx) this.ctx.revert();
  }

  scrollToSection(id: string){
    const element = document.getElementById(id);
    
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  }
}