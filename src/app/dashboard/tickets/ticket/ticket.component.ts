import { Component, input, output, signal } from '@angular/core';

import { Ticket } from '../ticket.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  data = input.required<Ticket>();
  detailsVisible = signal(false);
  close = output()
  open = output()

  onToggleDetails() {
    // this.detailsVisible.set(!this.detailsVisible());
    this.detailsVisible.update((wasVisible) => !wasVisible);
  }

  onMarkasComplted(){
    this.close.emit();
  }

  onReopenTicket(){
    this.open.emit()
  }
}