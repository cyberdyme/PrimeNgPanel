import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AccordionModule, DialogService, SplitButtonModule } from 'primeng/primeng';
import { PanelModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { RadioButtonModule } from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DynamicDialogModule } from 'primeng/components/dynamicdialog/dynamicdialog';
import { CarsListDemoComponent } from './cars-list-demo/cars-list-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsListDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    AccordionModule,
    PanelModule,
    ButtonModule,
    RadioButtonModule,
    SplitButtonModule,
    DynamicDialogModule
  ],
  providers: [DialogService],
  bootstrap: [AppComponent],
  entryComponents: [CarsListDemoComponent]
})
export class AppModule { }
