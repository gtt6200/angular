import { NgModule } from '@angular/core';

import { ButtonModule } from "primeng/button";
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardModule } from "primeng/card";
import { CalendarModule } from 'primeng/calendar';
import { ChartModule } from 'primeng/chart';
import { ChipsModule } from "primeng/chips";
import { ChipModule } from "primeng/chip";
import { DropdownModule } from 'primeng/dropdown';
import { FieldsetModule } from 'primeng/fieldset';
import { InputTextareaModule } from "primeng/inputtextarea";
import { InputNumberModule } from 'primeng/inputnumber';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from "primeng/menubar";
import { PanelModule } from 'primeng/panel';
import { RatingModule } from 'primeng/rating';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SplitButtonModule } from 'primeng/splitbutton';
import { SplitterModule } from "primeng/splitter";
import { TableModule } from "primeng/table";
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [],
  imports: [
  ],
  exports:[
    ButtonModule,
   // BrowserAnimationsModule,
    CardModule,
    CalendarModule,
    ChartModule,
    ChipsModule,
    ChipModule,
    DropdownModule,
    FieldsetModule,
    InputTextareaModule,
    InputNumberModule,
    MenubarModule,
    MenuModule,
    PanelModule,
    RatingModule,
    SelectButtonModule,
    SplitButtonModule,
    SplitterModule,
    TableModule,
    ToastModule,
  ]
})
export class PrimeNgModule { }
