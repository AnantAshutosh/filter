import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WomanOrgChartComponent } from './Components/woman-org-chart/woman-org-chart.component';
import { FilterComponent } from './Components/filter/filter.component'

import { MatDialogModule } from '@angular/material/dialog'
import {MatExpansionModule} from '@angular/material/expansion'




@NgModule({
  declarations: [
    AppComponent,
    WomanOrgChartComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
