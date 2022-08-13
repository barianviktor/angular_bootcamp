import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from "@angular/material/button"
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BeerComponent } from './beer/beer.component';
import { CreaterComponent } from './creater/creater.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';

import { FormsModule } from '@angular/forms';
import { EditorComponent } from './editor/editor.component';

@NgModule({
  declarations: [
    AppComponent,
    BeerComponent,
    CreaterComponent,
    BeerListComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
