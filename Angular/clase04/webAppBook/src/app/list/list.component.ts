import { Component, OnInit, Input } from '@angular/core';
import { Book } from "app/book";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() books: Book[]

}
