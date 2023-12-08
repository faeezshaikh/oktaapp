import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string, limit: number = 60, completeWords: boolean = true, ellipsis: string = '...'): string {
    if (!value) return '';

    // Strip HTML tags
    let div = document.createElement('div');
    div.innerHTML = value;
    let text = div.textContent || div.innerText || '';

    if (text.length <= limit) return text;

    if (completeWords) {
      limit = text.substr(0, limit).lastIndexOf(' ');
      limit = limit > 0 ? limit : limit + text.substr(0, limit).length;
    }

    return `${text.substr(0, limit)}${ellipsis}`;
  }
}
