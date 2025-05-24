import { Component, OnInit } from '@angular/core';
import { GsapRevealDirective } from '../directives/gsap-reveal.directive';
import { TopbarComponent } from '../layout/components/topbar/topbar.component';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-single5',
  standalone: true,
  imports: [GsapRevealDirective, TopbarComponent],
  templateUrl: './blog-single5.component.html',
  styles: ``
})
export class BlogSingle5Component implements OnInit {
  year = new Date().getFullYear();

  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.scrollToTop();

    // 🔹 SEO-optimalisert tittel og metabeskrivelse for blogginnlegg
    this.titleService.setTitle('Teknisk SEO i 2025 – Optimaliser ytelse og struktur');
    this.metaService.updateTag({
      name: 'description',
      content: 'Oppdag hvordan teknisk SEO kan forbedre nettstedets rangering i 2025. Fokus på hastighet, strukturert data, mobilvennlighet og Core Web Vitals.'
    });

    this.metaService.updateTag({
      name: 'keywords',
      content: 'teknisk SEO, SEO 2025, Core Web Vitals, mobilvennlighet, nettsidehastighet, SEO verktøy, strukturert data, søkemotoroptimalisering'
    });

    this.metaService.updateTag({
      property: 'og:title',
      content: 'Teknisk SEO i 2025 – Optimaliser ytelse og struktur'
    });

    this.metaService.updateTag({
      property: 'og:description',
      content: 'Lær hvordan teknisk SEO og god struktur gir bedre brukeropplevelse og høyere rangering i søkemotorer. Viktige tiltak for 2025.'
    });
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
