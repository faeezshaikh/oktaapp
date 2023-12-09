import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit: number = 60, completeWords: boolean = true, ellipsis: string = '...'): string {
    if (!value) return ''.padEnd(limit, ' '); // Pad with blanks if value is empty

    // Strip HTML tags
    let div = document.createElement('div');
    div.innerHTML = value;
    let text = div.textContent || div.innerText || '';

    if (text.length > limit) {
      if (completeWords) {
        limit = text.substr(0, limit).lastIndexOf(' ');
        limit = limit > 0 ? limit : limit + text.substr(0, limit).length;
      }
      return `${text.substr(0, limit)}${ellipsis}`;
    }

    return text.padEnd(limit, ' '); // Pad with blanks if text is shorter than limit
  }
}
