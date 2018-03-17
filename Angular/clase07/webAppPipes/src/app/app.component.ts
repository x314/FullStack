import { Component, OnInit } from '@angular/core';

interface iMovie {
  title:  string
  category:   string
  date:   Date
  actor:  string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  filtro: string = ''

  movies: iMovie[] = [
    {
      title: 'Río Bravo', 
      category: 'western', 
      date: new Date(2, 5, 1953), 
      actor: 'John Wayne'
    }, 
    {
      title: 'Asesinos', 
      category: 'western', 
      date: new Date(4, 7, 2012), 
      actor: 'Pierce Brosman'
    }, 
    {
      title: 'Los Dioses de Egipto', 
      category: 'fantasia', 
      date: new Date(6, 10, 2016), 
      actor: 'Gerald Butter'
    }, 
    {
      title: 'El Color del Dinero', 
      category: 'drama', 
      date: new Date(5, 8, 2009), 
      actor: 'Bruce Willis'
    }
  ]

  ngOnInit() {
    
  }
}
