import { Component } from '@angular/core';
import { Iservidor } from './iservidor';
import { DataService } from "./data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servidores: Iservidor[]

  constructor(private dataServices: DataService) {}

  ngOnInit() {
    this.servidores = this.dataService.listado()
  }
}
