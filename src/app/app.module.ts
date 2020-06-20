import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule} from './app-routing.module';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatModule } from "./mat/mat.module";
import { InternsComponent } from './interns/interns.component';
import { AudienceComponent } from './audience/audience.component';
import { HistComponent } from './hist/hist.component';
import { LinecComponent } from './linec/linec.component';
import { IntcvComponent } from './intcv/intcv.component';
import { IndexComponent } from './index/index.component';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { InternListComponent } from './intern-list/intern-list.component';
import { StructureComponent } from './structure/structure.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    InternsComponent,
    AudienceComponent,
    HistComponent,
    LinecComponent,
    IntcvComponent,
    IndexComponent,
    NavComponent,
    InternListComponent,
   
    StructureComponent,
   
    DialogComponent
  ],
  entryComponents:[ DialogComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AppRoutingModule,
    MatDialogModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
