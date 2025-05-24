import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlogSingle5Component } from './blog-single5.component';
import { Title, Meta } from '@angular/platform-browser';

describe('BlogSingle5Component', () => {
  let component: BlogSingle5Component;
  let fixture: ComponentFixture<BlogSingle5Component>;
  let titleService: Title;
  let metaService: Meta;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogSingle5Component],
      providers: [
        {
          provide: Title,
          useValue: { setTitle: jasmine.createSpy('setTitle') }
        },
        {
          provide: Meta,
          useValue: {
            updateTag: jasmine.createSpy('updateTag')
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(BlogSingle5Component);
    component = fixture.componentInstance;
    titleService = TestBed.inject(Title);
    metaService = TestBed.inject(Meta);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set title and meta tags on init', () => {
    component.ngOnInit();

    expect(titleService.setTitle).toHaveBeenCalledWith(
      'Teknisk SEO i 2025 – Optimaliser ytelse og struktur'
    );

    expect(metaService.updateTag).toHaveBeenCalledWith({
      name: 'description',
      content:
        'Oppdag hvordan teknisk SEO kan forbedre nettstedets rangering i 2025. Fokus på hastighet, strukturert data, mobilvennlighet og Core Web Vitals.'
    });

    expect(metaService.updateTag).toHaveBeenCalledWith({
      name: 'keywords',
      content:
        'teknisk SEO, SEO 2025, Core Web Vitals, mobilvennlighet, nettsidehastighet, SEO verktøy, strukturert data, søkemotoroptimalisering'
    });

    expect(metaService.updateTag).toHaveBeenCalledWith({
      property: 'og:title',
      content: 'Teknisk SEO i 2025 – Optimaliser ytelse og struktur'
    });

    expect(metaService.updateTag).toHaveBeenCalledWith({
      property: 'og:description',
      content:
        'Lær hvordan teknisk SEO og god struktur gir bedre brukeropplevelse og høyere rangering i søkemotorer. Viktige tiltak for 2025.'
    });
  });
});