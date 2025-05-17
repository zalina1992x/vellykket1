import { Component, OnInit } from '@angular/core';
import { GsapRevealDirective } from '../../directives/gsap-reveal.directive';
import { TopbarComponent } from "../../layout/components/topbar/topbar.component";

@Component({
  selector: 'app-blog-single',
  standalone: true,
  imports: [GsapRevealDirective, TopbarComponent],
  templateUrl: './blog-single.component.html',
  styles: ``
})
export class BlogSingleComponent implements OnInit {
  year = new Date().getFullYear();

  ngOnInit(): void {
    this.scrollToTop();
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}