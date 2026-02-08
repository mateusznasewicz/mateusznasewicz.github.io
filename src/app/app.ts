import { Component, OnInit, signal } from '@angular/core';
import { Hero } from './sections/hero/hero';
import { About } from './sections/about/about';
import { Code } from './sections/code/code';
import { Footer } from './sections/footer/footer';
import { Navbar } from './sections/navbar/navbar';
import { TechRows } from './sections/tech/tech';
import { Work } from './sections/work/work';

@Component({
  selector: 'app-root',
  imports: [Hero, About, Code, Footer, Navbar, TechRows, Work],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App{
  protected readonly title = signal('personal-website');
}
