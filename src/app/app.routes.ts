import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { PreviewComponent } from './views/preview/preview.component';
import { BlogSingleComponent } from './views/blog-single/blog-single.component';
import { BlogSingle2Component } from './blog-single2/blog-single2.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LayoutComponent,
    loadChildren: () =>
      import('./views/views.route').then((mod) => mod.VIEWS_ROUTE),
  },
  {
    path: 'preview',
    component: PreviewComponent
  },
  {
    path: 'blog-single',
    component: BlogSingleComponent
  },
  {
    path: 'blog-single2',
    component: BlogSingle2Component
  },
];