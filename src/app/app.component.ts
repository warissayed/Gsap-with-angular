import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'gsap-with-angular';
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    if (isPlatformBrowser(this.platformId)) {
      gsap.to('.ImageOne', {
        x: '53vh',
        y: 250,
        scale: 3,
        opacity: 1,
        duration: 3,
        scrollTrigger: {
          trigger: '.ImageOne',
          start: 'top 80%',
          end: 'top 10%',
          markers: true,
          scrub: 4,
          toggleActions: 'restart pause reverse pause',
        },
      });
      gsap.to('.ImageTwo', {
        x: '-53vh',
        y: 250,
        scale: 3,
        rotate: 360,
        duration: 3,
        scrollTrigger: {
          trigger: '.ImageTwo',
          start: 'top 80%',
          end: 'top 10%',
          markers: true,
          scrub: 4,
          toggleActions: 'restart pause reverse pause',
        },
      });
    }
  }
}
