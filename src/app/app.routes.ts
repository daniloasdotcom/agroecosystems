import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ManejoComponent } from './components/manejo/manejo.component';

export const routes: Routes = [
    {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'manejo',
    component: ManejoComponent,
  }
];

