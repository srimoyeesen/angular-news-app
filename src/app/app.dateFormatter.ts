import { Directive , ElementRef, Input, AfterViewInit} from '@angular/core';
import * as moment from 'moment';


@Directive({
  selector : '[dateFormatter]'
})

export class DateFormatterDirective implements AfterViewInit {

  text: 'hey';
  @Input() dateFormatter;

  constructor(private el: ElementRef) {
  }

  ngAfterViewInit(): void {
      this.el.nativeElement.innerHTML = moment(this.dateFormatter).fromNow();
    }
}
