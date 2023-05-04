import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignalDemoComponent } from './signal-demo/signal-demo.component';

const routes: Routes = [
  { path: 'signal-demo', component: SignalDemoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
