import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import {
  /* . . . */
  NgFor,
  NgIf,
  /* . . . */
} from '@angular/common';

@NgModule({
  declarations: [AppComponent, HeroesComponent],
  imports: [BrowserModule, FormsModule, NgIf, NgFor],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
