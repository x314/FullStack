import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrarLista'
})
export class FiltrarListaPipe implements PipeTransform {

  transform(value: any, filtro: string, columna: string): any {
    if (filtro.trim() == '')
      return value

    const resultados = []
    
    for (let item of value) {
      if (item[columna].toLowerCase().trim().indexOf(filtro.toLowerCase().trim()) != -1)
        resultados.push(item)
    }

    return resultados
  }

}
