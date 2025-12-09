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
      title: 'FinTech Dashboard',
      role: 'Backend Lead',
      year: '2024',
      description: 'A high-throughput banking interface processing 500+ transactions per second using Kafka streams.',
      techStack: ['Java 17', 'Spring Boot', 'Kafka', 'Angular'],
      imageUrl: 'assets/images/fintech-dash.jpg',
      hexColor: '#3b82f6' // Blue accent
    },
    {
      id: 2,
      title: 'E-Commerce API',
      role: 'Fullstack Engineer',
      year: '2023',
      description: 'Microservices architecture for a retail giant, featuring automated inventory scaling and Redis caching.',
      techStack: ['Node.js', 'Spring Cloud', 'Redis', 'Docker'],
      imageUrl: 'assets/images/ecommerce-api.jpg',
      hexColor: '#a855f7' // Purple accent
    },
    {
      id: 3,
      title: 'AI Data Visualizer',
      role: 'Java + D3.js',
      year: '2023',
      description: 'Interactive graph rendering engine that maps complex neural network nodes in real-time.',
      techStack: ['Java', 'D3.js', 'WebSockets', 'PostgreSQL'],
      imageUrl: 'assets/images/ai-viz.jpg',
      hexColor: '#22c55e' // Green accent
    },
    {
      id: 4,
      title: 'Cloud Migration',
      role: 'DevOps Associate',
      year: '2022',
      description: 'Legacy monolith to AWS Lambda migration script, reducing server costs by 40%.',
      techStack: ['AWS Lambda', 'Terraform', 'Bash', 'Java'],
      imageUrl: 'assets/images/cloud-mig.jpg',
      hexColor: '#f97316' // Orange accent
    }
  ];

  constructor() { }

  getProjects(): Observable<Project[]> {
    return of(this.projects);
  }
  
  getProjectById(id: number): Project | undefined {
    return this.projects.find(p => p.id === id);
  }
}