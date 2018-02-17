import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { BookComponent } from './book/book.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ListComponent,
    BookComponent
  ],
  imports: [
		BrowserModule, 
		FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
