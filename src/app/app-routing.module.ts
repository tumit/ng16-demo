import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignalDemoComponent } from './signal-demo/signal-demo.component';
import { DestroyRefDemoComponent } from './destroy-ref-demo/destroy-ref-demo.component';
import { TakeUntilDestroyedDemoComponent } from './take-until-destroyed-demo/take-until-destroyed-demo.component';
import { BindRouterInputDemoComponent } from './bind-router-input-demo/bind-router-input-demo.component';
import { optionsResolveFn } from './bind-router-input-demo/options.resolver';
import { NgTemplateOutletStrictTypeDemoComponent } from './ng-template-outlet-strict-type-demo/ng-template-outlet-strict-type-demo.component';
import { AuthService } from './auth.service';
import { tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const routes: Routes = [
  { path: 'signal-demo', component: SignalDemoComponent },
  { path: 'destroy-ref-demo', component: DestroyRefDemoComponent },
  {
    path: 'take-until-destroyed-demo',
    component: TakeUntilDestroyedDemoComponent,
  },
  { path: 'bind-router-input-demo', component: BindRouterInputDemoComponent },
  {
    path: 'bind-router-input-demo/:id',
    component: BindRouterInputDemoComponent,
    data: { title: 'My title' },
    resolve: { options: optionsResolveFn },
  },
  {
    path: 'ng-template-outlet-strict-type-demo',
    component: NgTemplateOutletStrictTypeDemoComponent,
  },
  {
    path: 'directives-composition-demo',
    loadComponent: () =>
      import(
        './directives-composition-demo/directives-composition-demo.component'
      ).then((c) => c.DirectivesCompositionDemoComponent),
  },
  {
    path: 'image-directive-demo',
    loadComponent: () =>
      import(
        './image-directive-demo/image-directive-demo.component'
      ).then((c) => c.ImageDirectiveDemoComponent),
  },
  {
    path: 'routing-fn-demo',
    canActivate: [() => inject(AuthService).isAdmin().pipe(tap(b => {
      if (!b) {
        alert('Not Admin')
      }
    }))],
    // resolve: [{ options: ()=> inject(HttpClient).get<string[]>('/assets/json/colors.json') }],
    loadComponent: () =>
      import('./routing-fn-demo/routing-fn-demo.component')
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
