import { Component, OnInit } from '@angular/core';
import { GsapRevealDirective } from '../directives/gsap-reveal.directive';
import { TopbarComponent } from '../layout/components/topbar/topbar.component';

@Component({
  selector: 'app-blog-single2',
  standalone: true,
  imports: [GsapRevealDirective, TopbarComponent],
  templateUrl: './blog-single2.component.html',
  styles: ``
})
export class BlogSingle2Component implements OnInit {
  year = new Date().getFullYear();

  ngOnInit(): void {
    this.scrollToTop();
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Możesz też dać 'auto' dla natychmiastowego scrolla
  }
}