import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignalDemoComponent } from './signal-demo/signal-demo.component';
import { DestroyRefDemoComponent } from './destroy-ref-demo/destroy-ref-demo.component';
import { TakeUntilDestroyedDemoComponent } from './take-until-destroyed-demo/take-until-destroyed-demo.component';
import { BindRouterInputDemoComponent } from './bind-router-input-demo/bind-router-input-demo.component';
import { optionsResolveFn } from './bind-router-input-demo/options.resolver';

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
    resolve: { options: optionsResolveFn }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
