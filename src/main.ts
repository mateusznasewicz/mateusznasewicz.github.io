import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { SplitText } from 'gsap/SplitText';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, SplitText);
