import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindRouterInputDemoComponent } from './bind-router-input-demo/bind-router-input-demo.component';
import { DestroyRefDemoComponent } from './destroy-ref-demo/destroy-ref-demo.component';
import { GenericTableComponent } from './generic-table/generic-table.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { NgTemplateOutletStrictTypeDemoComponent } from './ng-template-outlet-strict-type-demo/ng-template-outlet-strict-type-demo.component';
import { SignalDemoComponent } from './signal-demo/signal-demo.component';
import { TakeUntilDestroyedDemoComponent } from './take-until-destroyed-demo/take-until-destroyed-demo.component';
import { TickTadaComponent } from './take-until-destroyed-demo/tick-tada.component';
import { BorderDirective } from './utils/border.directive';
import { EnOnlyDirective } from './utils/en-only.directive';
import { HighlightAndBorderDirective } from './utils/highlight-and-border.directive';
import { HighlightDirective } from './utils/highlight.directive';
import { NumberOnlyDirective } from './utils/number-only.directive';
import { TypeAsDirective } from './utils/type-as.directive';

@NgModule({
  declarations: [
    AppComponent,
    SignalDemoComponent,
    DestroyRefDemoComponent,
    TakeUntilDestroyedDemoComponent,
    TickTadaComponent,
    BindRouterInputDemoComponent,
    NgTemplateOutletStrictTypeDemoComponent,
    GenericTableComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    TypeAsDirective,
    NumberOnlyDirective,
    EnOnlyDirective,
    HighlightDirective,
    BorderDirective,
    HighlightAndBorderDirective,
    MenuItemComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
