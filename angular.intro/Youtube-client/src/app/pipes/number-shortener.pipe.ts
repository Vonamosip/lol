import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberShortener',
  standalone: true
})
export class NumberShortenerPipe implements PipeTransform {

  transform(value: string ): string {


    // Преобразование строки в число, если это возможно
    const numericValue = parseFloat(value);



    if (numericValue < 1000) {
      return numericValue.toString(); // Числа меньше 1000 остаются без изменений
    } else if (numericValue >= 1000 && numericValue < 1000000) {
      return (numericValue / 1000).toFixed(1).replace(/\.0$/, '') + 'k'; // Отображение чисел в тысячах
    } else if (numericValue >= 1000000 && numericValue < 1000000000) {
      return (numericValue / 1000000).toFixed(1).replace(/\.0$/, '') + 'M'; // Отображение чисел в миллионах
    } else {
      return (numericValue / 1000000000).toFixed(1).replace(/\.0$/, '') + 'B'; // Отображение чисел в миллиардах
    }
  }
}
