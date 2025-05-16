import { Component } from '@angular/core';
import { GsapRevealDirective } from '../../directives/gsap-reveal.directive';
import { TopbarComponent } from "../../layout/components/topbar/topbar.component";

@Component({
  selector: 'app-blog-single1',
  imports: [GsapRevealDirective, TopbarComponent],
  templateUrl: './blog-single1.component.html',
  styles: ``
})
export class BlogSingle1Component {
  year = new Date().getFullYear()
}
