import { Routes } from '@angular/router';
import { Section1Component } from './pages/detail/section1/section1.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailComponent } from './pages/detail/detail.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'product/:id', component: DetailComponent }
    ]
  }
];
