import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [TopbarComponent, SidebarComponent],
  templateUrl: './layout.component.html',
  styles: ``
})
export class LayoutComponent implements AfterViewInit {

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const magnetics = this.el.nativeElement.querySelectorAll('.magnetic');

    document.addEventListener('mousemove', (e: MouseEvent) => {
      magnetics.forEach((el: HTMLElement) => {
        const magnetic = el as HTMLElement;
        const rect = magnetic.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const distX = e.clientX - centerX;
        const distY = e.clientY - centerY;
        const distance = Math.sqrt(distX ** 2 + distY ** 2);

        const threshold = 300; // większy zasięg
        if (distance < threshold) {
          const strength = 1 - distance / threshold;
          magnetic.style.transform = `translate(${distX * 0.25 * strength}px, ${distY * 0.25 * strength}px)`;
        } else {
          magnetic.style.transform = 'translate(0, 0)';
        }
      });
    });
  }
}