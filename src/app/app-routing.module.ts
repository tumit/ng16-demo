import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignalDemoComponent } from './signal-demo/signal-demo.component';
import { DestroyRefDemoComponent } from './destroy-ref-demo/destroy-ref-demo.component';

const routes: Routes = [
  { path: 'signal-demo', component: SignalDemoComponent },
  { path: 'destroy-ref-demo', component: DestroyRefDemoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
