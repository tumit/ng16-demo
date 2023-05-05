import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignalDemoComponent } from './signal-demo/signal-demo.component';
import { DestroyRefDemoComponent } from './destroy-ref-demo/destroy-ref-demo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TakeUntilDestroyedDemoComponent } from './take-until-destroyed-demo/take-until-destroyed-demo.component';
import { TickTadaComponent } from './take-until-destroyed-demo/tick-tada.component';

@NgModule({
  declarations: [
    AppComponent,
    SignalDemoComponent,
    DestroyRefDemoComponent,
    TakeUntilDestroyedDemoComponent,
    TickTadaComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
