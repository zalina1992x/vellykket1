import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { TopbarComponent } from "./components/topbar/topbar.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [TopbarComponent, SidebarComponent],
  templateUrl: './layout.component.html',
  styles: [`
    #siteLogo {
      animation: pulse 2.5s ease-in-out infinite;
      transform-origin: center;
      display: inline-block;
    }

    @keyframes pulse {
      0% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.05); opacity: 0.85; }
      100% { transform: scale(1); opacity: 1; }
    }
  `]
})
export class LayoutComponent implements AfterViewInit {

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const logo = this.el.nativeElement.querySelector('#siteLogo');
    if (logo) {
      // Początkowa animacja wejścia logo
      logo.style.opacity = '0';
      logo.style.transform = 'scale(0.7) rotate(-10deg)';
      setTimeout(() => {
        logo.style.transition = 'all 0.8s ease';
        logo.style.opacity = '1';
        logo.style.transform = 'scale(1) rotate(0deg)';
      }, 100);

      // Efekty hover
      logo.addEventListener('mouseenter', () => {
        logo.style.transform = 'scale(1.1)';
      });
      logo.addEventListener('mouseleave', () => {
        logo.style.transform = 'scale(1)';
      });
    }
  }
}
