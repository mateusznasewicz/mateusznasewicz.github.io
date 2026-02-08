import { Injectable } from '@angular/core';
import { Tech } from '../models/tech';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TechDataService {

  private techs: Tech[][] = [
    [
      { name: 'Java 21', icon: 'devicon-java-plain' },
      { name: 'Spring Boot', icon: 'devicon-spring-original' },
      { name: 'PostgreSQL', icon: 'devicon-postgresql-plain' },
      { name: 'MongoDB', icon: 'devicon-mongodb-plain' },
      { name: 'Redis', icon: 'devicon-redis-plain'},
      { name: 'Kafka', icon: 'devicon-apachekafka-original' },
      { name: 'RabbitMQ', icon: 'devicon-rabbitmq-original'},
      
    ],
    [
      { name: 'Angular 17', icon: 'devicon-angular-plain' },
      { name: 'TypeScript', icon: 'devicon-typescript-plain' },
      { name: 'RxJS', icon: 'devicon-rxjs-plain' },
      { name: 'SCSS', icon: 'devicon-sass-plain' },
      { name: 'Tailwind', icon: 'devicon-tailwindcss-plain' },
      { name: 'GSAP', icon: 'icon-gsap' },
      { name: 'GraphQL', icon: 'devicon-graphql-plain' },
    ],
    [
      { name: 'Terraform', icon: 'devicon-terraform-plain' },
      { name: 'Docker', icon: 'devicon-docker-plain' },
      { name: 'AWS', icon: 'devicon-amazonwebservices-plain-wordmark' },
      { name: 'Jenkins', icon: 'devicon-jenkins-plain' },
      { name: 'Git', icon: 'devicon-git-plain' },
      { name: 'Grafana', icon: 'devicon-grafana-plain' },
      { name: 'Prometheus', icon: 'devicon-prometheus-original' },
    ]
  ];

  constructor() { }

  getTechs(): Observable<Tech[][]> {
    return of(this.techs);
  }

}