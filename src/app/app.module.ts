import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignalDemoComponent } from './signal-demo/signal-demo.component';
import { DestroyRefDemoComponent } from './destroy-ref-demo/destroy-ref-demo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TakeUntilDestroyedDemoComponent } from './take-until-destroyed-demo/take-until-destroyed-demo.component';
import { TickTadaComponent } from './take-until-destroyed-demo/tick-tada.component';
import { BindRouterInputDemoComponent } from './bind-router-input-demo/bind-router-input-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    SignalDemoComponent,
    DestroyRefDemoComponent,
    TakeUntilDestroyedDemoComponent,
    TickTadaComponent,
    BindRouterInputDemoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
