import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignalDemoComponent } from './signal-demo/signal-demo.component';
import { DestroyRefDemoComponent } from './destroy-ref-demo/destroy-ref-demo.component';
import { TakeUntilDestroyedDemoComponent } from './take-until-destroyed-demo/take-until-destroyed-demo.component';

const routes: Routes = [
  { path: 'signal-demo', component: SignalDemoComponent },
  { path: 'destroy-ref-demo', component: DestroyRefDemoComponent },
  { path: 'take-until-destroyed-demo', component: TakeUntilDestroyedDemoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
