import { Injectable, signal } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class NavigationService {
  activeSectionId = signal<string>('hero');

  setActiveSection(id: string) {
    this.activeSectionId.set(id);
  }
}