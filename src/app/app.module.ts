import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//HttpModule?

import { AppComponent } from './app.component';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import { DataService } from './data.service'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'


@NgModule({ //TODO : Understand difference between declartions and providers etc.
  declarations: [
    AppComponent,
    MyNewComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
