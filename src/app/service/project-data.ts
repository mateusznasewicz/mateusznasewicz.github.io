import { Injectable } from '@angular/core';
import { Project } from '../models/project';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectDataService {

  private projects: Project[] = [
    {
      id: 1,
      title: 'Culinary Recipe Manager',
      role: 'Backend Lead',
      year: '2025',
      description: 'Full-stack recipe management platform built with a CQRS (Command Query Responsibility Segregation) architecture. The system separates read and write operations across dedicated microservices that communicate asynchronously via RabbitMQ, fronted by a reactive API gateway handling JWT authentication and role-based access control..',
      techStack: ['Java', 'Spring Boot', 'Angular', 'RabbitMQ', 'PostgreSQL', 'Docker'],
      imageUrl: 'culinary-recipe-manager.png',
      repoUrl: 'https://github.com/mateusznasewicz/culinary-recipe-manager',
      hexColor: '#3b82f6'
    },
    {
      id: 2,
      title: 'Cloud Native Task Manager',
      role: 'Fullstack Cloud Engineer',
      year: '2025',
      description: 'Scalable cloud-native architecture based on AWS ECS Fargate, utilizing Terraform for full infrastructure automation (IaC). The system ensures High Availability (Multi-AZ) via Application Load Balancer and implements zero-trust security with AWS Cognito integration and private VPC subnets. The solution is complemented by an automated CI/CD pipeline using Amazon ECR and serverless data storage on Amazon S3.',
      techStack: ['Java', 'Spring Boot', 'Angular', 'AWS', 'Terraform', 'Docker'],
      imageUrl: 'cloud-native-task-manager.png',
      repoUrl: 'https://github.com/mateusznasewicz/Cloud-Native-Task-Management-System',
      hexColor: '#a855f7'
    },
    {
      id: 3,
      title: 'City Bike System',
      role: 'System Architect & Backend Lead',
      year: '2025',
      description: 'Cloud-native, event-driven microservices architecture for managing urban bike-sharing operations at scale. Designed with enterprise-grade reliability, this system orchestrates fleet management, rental operations, and payment processing across distributed infrastructure.',
      techStack: ['Java', 'Spring Boot', 'Kafka', 'Redis', 'MQTT', 'Docker', 'Jenkins'],
      imageUrl: 'city-bike-system.png',
      repoUrl: 'https://github.com/mateusznasewicz/city-bike-system',
      hexColor: '#22c55e'
    },
  ];

  constructor() { }

  getProjects(): Observable<Project[]> {
    return of(this.projects);
  }

  getProjectsLength(): number {
    return this.projects.length;
  }
  
  getProjectById(id: number): Project | undefined {
    return this.projects.find(p => p.id === id);
  }
}