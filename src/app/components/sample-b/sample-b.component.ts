import { Component, OnInit } from '@angular/core';
import { RecipientsService } from '../../services/recipients.service';

@Component({
  selector: 'app-sample-b',
  templateUrl: './sample-b.component.html',
  styleUrls: ['./sample-b.component.scss']
})
export class SampleBComponent implements OnInit {

  listEmails: String[];

  toggle: boolean = true;

  constructor(private recipientsService: RecipientsService) {}

  ngOnInit() {
    this.getRecipients();
  }

  getRecipients(): void {
    this.recipientsService.getRecipients()
        .subscribe(recipients => this.listEmails = recipients);
  }

  onToggle() {
    this.toggle = !this.toggle;
  }

}
