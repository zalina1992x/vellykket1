import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import aos from 'aos';
import { CursorDirective } from './directives/cursor.directive';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CursorDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ovro-angular';
  pathLength: number = 0;
  strokeDashOffset: number = 0;
  offset: number = 50;
  duration: number = 550;
  showPreloader: boolean = true;

  ngOnInit() {
    aos.init();
    const pathElement = document.querySelector('.progress-circle path') as SVGPathElement;
    if (pathElement) {
      this.pathLength = pathElement.getTotalLength();
      pathElement.style.strokeDasharray = `${this.pathLength} ${this.pathLength}`;
      this.strokeDashOffset = this.pathLength;
    }

    setTimeout(() => {
      this.showPreloader = false;
    }, 900);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = this.pathLength - (scroll * this.pathLength) / height;
    this.strokeDashOffset = progress;
    this.toggleActiveClass(scroll > this.offset);
  }

  toggleActiveClass(isActive: boolean) {
    const progressWrap = document.querySelector('.progress-wrap');
    if (progressWrap) {
      progressWrap.classList.toggle('active-progress', isActive);
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
