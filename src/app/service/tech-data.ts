import { Injectable } from '@angular/core';
import { Tech } from '../models/tech';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TechDataService {

  private techs: Tech[][] = [
    [
      { name: 'Java 21', icon: 'assets/icons/java.svg' },
      { name: 'Spring Boot', icon: 'assets/icons/spring.svg' },
      { name: 'Hibernate', icon: 'assets/icons/hibernate.svg' },
      { name: 'PostgreSQL', icon: 'assets/icons/postgres.svg' },
      { name: 'Microservices', icon: 'assets/icons/micro.svg' },
      { name: 'Kafka', icon: 'assets/icons/kafka.svg' }
    ],
    [
      { name: 'Angular 17', icon: 'assets/icons/angular.svg' },
      { name: 'TypeScript', icon: 'assets/icons/ts.svg' },
      { name: 'RxJS', icon: 'assets/icons/rxjs.svg' },
      { name: 'SCSS', icon: 'assets/icons/sass.svg' },
      { name: 'Tailwind', icon: 'assets/icons/tailwind.svg' },
      { name: 'GSAP', icon: 'assets/icons/gsap.svg' }
    ],
    [
      { name: 'Docker', icon: 'assets/icons/docker.svg' },
      { name: 'Kubernetes', icon: 'assets/icons/k8s.svg' },
      { name: 'AWS', icon: 'assets/icons/aws.svg' },
      { name: 'Jenkins', icon: 'assets/icons/jenkins.svg' },
      { name: 'Git', icon: 'assets/icons/git.svg' },
      { name: 'IntelliJ', icon: 'assets/icons/intellij.svg' }
    ]
  ];

  constructor() { }

  getTechs(): Observable<Tech[][]> {
    return of(this.techs);
  }

}