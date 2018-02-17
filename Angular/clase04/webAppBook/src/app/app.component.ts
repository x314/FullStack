import { Component } from '@angular/core';
import { Book } from "app/book";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  books: Array<Book> = []

  // Si no utilizara interface
  // books: <{}>
  // books: Array<{title: String, ... }>

  // Book es la interface
  addBook(data: Book) {
    this.books.push(data)
  }
}
