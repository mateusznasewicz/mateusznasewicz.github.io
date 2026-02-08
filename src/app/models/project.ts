export interface Project {
  id: number;
  title: string;
  role: string;
  year: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  repoUrl: string;
  hexColor?: string;
}