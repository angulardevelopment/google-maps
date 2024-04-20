import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CONFIG } from './config';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: '', // CONFIG.GOOGLE_API_KEY
      libraries: ['places', 'geometry']
  }),
  ],
  declarations: [
    AppComponent
  ],
  exports: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
