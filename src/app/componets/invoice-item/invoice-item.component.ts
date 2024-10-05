import { Component, Input } from '@angular/core';
import { InvoiceItems } from '../../model/Invoiceltem';

@Component({
  selector: 'tr[invoice-item]',
  standalone: true,
  imports: [],
  templateUrl: './invoice-item.component.html',
})
export class InvoiceItemComponent {
    @Input()item!:InvoiceItems;
}
