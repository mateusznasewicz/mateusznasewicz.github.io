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
      title: 'Dopamine Delivery',
      role: 'Full-stack & DevOps Developer',
      year: '2026',
      description: 'Food delivery platform featuring a live 3D tracking map. Built with a robust backend integrating third-party APIs for routing and geocoding, backed by optimized MongoDB spatial queries and deployed via automated CI/CD pipelines.',      techStack: ['Java', 'Spring Boot', 'Angular', 'WebSockets', 'MongoDB', 'Terraform', 'Stripe'],
      videoUrl: 'dopamine-delivery.mp4',
      repoUrl: 'https://dopamine-delivery.mateusznasewicz.dev',
      hexColor: '#f97316'
    },
    {
      id: 2,
      title: 'Culinary Recipe Manager',
      role: 'Backend Lead',
      year: '2025',
      description: 'Full-stack recipe management platform built with a CQRS architecture. The system separates read and write operations across dedicated microservices that communicate asynchronously via RabbitMQ, fronted by a reactive API gateway handling JWT authentication and role-based access control.',
      techStack: ['Java', 'Spring Boot', 'Angular', 'RabbitMQ', 'PostgreSQL', 'Docker'],
      imageUrl: 'culinary-recipe-manager.png',
      repoUrl: 'https://github.com/mateusznasewicz/culinary-recipe-manager',
      hexColor: '#3b82f6'
    },
    {
      id: 3,
      title: 'Cloud Native Task Manager',
      role: 'Fullstack Cloud Engineer',
      year: '2025',
      description: 'Cloud-native architecture on AWS ECS Fargate with Terraform IaC, multi availability zones via ALB, zero-trust security with Cognito & private VPC, CI/CD pipeline with ECR, and serverless storage on S3.',
      techStack: ['Java', 'Spring Boot', 'Angular', 'AWS', 'Terraform', 'Docker'],
      imageUrl: 'cloud-native-task-manager.png',
      repoUrl: 'https://github.com/mateusznasewicz/Cloud-Native-Task-Management-System',
      hexColor: '#a855f7'
    },
    {
      id: 4,
      title: 'City Bike System',
      role: 'System Architect & Backend Lead',
      year: '2025',
      description: 'Cloud-native, event-driven microservices architecture for managing urban bike-sharing operations at scale. Designed with enterprise-grade reliability, this system orchestrates fleet management, rental operations, and payment processing across distributed infrastructure.',
      techStack: ['Java', 'Spring Boot', 'Kafka', 'Redis', 'MQTT', 'Docker', 'AWS'],
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