import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'sanatize'
})
export class SanatizePipe implements PipeTransform {

  constructor(private sanatize: DomSanitizer){}

  transform(value: any) {
    return this.sanatize.bypassSecurityTrustResourceUrl('data:image/*;base64,' + value);
  }

}
