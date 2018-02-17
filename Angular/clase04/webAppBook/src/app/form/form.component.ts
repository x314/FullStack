import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Book } from "app/book";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // decorador
  // salida
  @Output() onNewBook = new EventEmitter<Book>()

  // Si no utilizara interface
  // @Output() onNewBook = new EventEmitter<{}>()
  // @Output() onNewBook = new EventEmitter<{title: string, ... }>()

  book: Book = {}
  
  title: String
  author: String
  description: String

  addBook() {
    this.onNewBook.emit(this.book)
    this.book = {}

    console.log('Add Book')
  }

}
