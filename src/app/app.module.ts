import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import {
  AccordionModule,
  DialogService,
  SplitButtonModule,
  DialogModule,
  AutoCompleteModule
} from 'primeng/primeng';
import { PanelModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { RadioButtonModule } from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicDialogModule } from 'primeng/components/dynamicdialog/dynamicdialog';
import { CarsListDemoComponent } from './cars-list-demo/cars-list-demo.component';
import { CustomPanelComponent } from './component/custom-panel/custom-panel.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { CustomHeaderDirective } from './component/custom-panel/custom-header.directive';
import { CustomContentDirective } from './component/custom-panel/custom-content.directive';
import { CustomFooterDirective } from './component/custom-panel/custom-footer.directive';
import { GenerateNamesService } from './services/generate-names.service';
import { CarInputFormComponent } from './cars-list-demo/car-input-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsListDemoComponent,
    CustomPanelComponent,
    CustomHeaderDirective,
    CustomContentDirective,
    CustomFooterDirective,
    CarInputFormComponent
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
    DynamicDialogModule,
    FlexLayoutModule,
    DialogModule,
    AutoCompleteModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [DialogService, GenerateNamesService],
  bootstrap: [AppComponent],
  entryComponents: [CarsListDemoComponent]
})
export class AppModule { }
