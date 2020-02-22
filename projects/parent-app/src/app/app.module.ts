import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToolsComponent } from 'projects/tools/src/lib/tools.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
