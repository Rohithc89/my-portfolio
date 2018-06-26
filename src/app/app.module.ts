import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { AboutComponent } from './about/about.component';
import { TextContentComponent } from './text-content/text-content.component';
import { WorkExpComponent } from './work-exp/work-exp.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    AboutComponent,
    TextContentComponent,
    WorkExpComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
