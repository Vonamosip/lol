import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'appSearch',
  standalone: true,
})
export class SearchPipe implements PipeTransform {
  transform<T>(data: T[], key: keyof T, searchText: string): T[] {
    if (!searchText) {
      return data;
    }

    return data.filter((item) =>
      (item[key] as string)
        .toLocaleLowerCase()
        .includes(searchText.toLocaleLowerCase())
    );
  }
}
