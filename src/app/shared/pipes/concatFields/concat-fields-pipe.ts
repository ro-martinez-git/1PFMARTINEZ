import { Pipe, PipeTransform } from '@angular/core';



@Pipe({
  name: 'concatFields',
  standalone: false 
})
export class ConcatFieldsPipe implements PipeTransform {
  transform(nombre: string, apellido: string): string {
    return `${nombre} ${apellido}`;
  }
}
