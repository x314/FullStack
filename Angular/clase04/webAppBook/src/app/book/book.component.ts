import { Component, OnInit, Input } from '@angular/core';
import { Book } from "app/book";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() book: Book

}
