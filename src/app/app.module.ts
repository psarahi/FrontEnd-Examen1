import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeatherModule } from 'angular-feather';
import { Camera, Heart, Github, Book } from 'angular-feather/icons';

const icons = {
  Camera,
  Heart,
  Github,
  Book
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,

    FeatherModule.pick(icons)
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
