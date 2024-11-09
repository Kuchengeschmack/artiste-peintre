import { Routes } from '@angular/router';

import { GalleryComponent } from './views/gallery/gallery.component';
import { LoginComponent } from './views/login/login.component';

export const routes: Routes = [
  {
    path: 'gallery',
    children: [
      {
        path: 'intro',
        title: 'Marie-Cécile Caron | Présentation',
        component: GalleryComponent,
      },
      {
        path: 'book',
        title: 'Marie-Cécile Caron | Book',
        component: GalleryComponent,
      },
    ],
  },
  {
    path: 'login',
    title: 'Marie-Cécile Caron | Login',
    component: LoginComponent,
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];
