import { Component, OnInit } from '@angular/core';
import { RecipientsService } from '../../services/recipients.service';

@Component({
  selector: 'app-sample-c',
  templateUrl: './sample-c.component.html',
  styleUrls: ['./sample-c.component.scss']
})
export class SampleCComponent implements OnInit {

  listEmails: String;

  toggle: boolean = true;

  constructor(private recipientsService: RecipientsService) {}

  ngOnInit() {
    this.getRecipients();
  }

  getRecipients(): void {
    this.recipientsService.getRecipients()
        .subscribe(recipients => this.listEmails = recipients.join('\n'));
  }

  onToggle() {
    this.toggle = !this.toggle;
  }

}
