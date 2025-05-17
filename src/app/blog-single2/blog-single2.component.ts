import { Component } from '@angular/core';
import { GsapRevealDirective } from '../directives/gsap-reveal.directive';
import { TopbarComponent } from '../layout/components/topbar/topbar.component';

@Component({
  selector: 'app-blog-single2',
  standalone: true,
  imports: [GsapRevealDirective, TopbarComponent],
  templateUrl: './blog-single2.component.html',
  styles: ``
})
export class BlogSingle2Component {
  year = new Date().getFullYear();
}