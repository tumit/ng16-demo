import { Routes } from '@angular/router';
import { BindRouterInputStandaloneDemoComponent } from './bind-router-input-standalone-demo/bind-router-input-standalone-demo.component';
import { optionsResolveFn } from 'src/app/bind-router-input-demo/options.resolver';

export const routes: Routes = [
  { path: 'bind-router-input-standalone-demo', component: BindRouterInputStandaloneDemoComponent },
  {
    path: 'bind-router-input-standalone-demo/:id',
    component: BindRouterInputStandaloneDemoComponent,
    data: { title: 'My title' },
    resolve: { options: optionsResolveFn }
  },
];
