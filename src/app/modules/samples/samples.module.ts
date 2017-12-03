import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { RecipientsService } from '../../services/recipients.service';

import { SampleAComponent } from '../../components/sample-a/sample-a.component';
import { SampleBComponent } from '../../components/sample-b/sample-b.component';
import { SampleCComponent } from '../../components/sample-c/sample-c.component';

const modules = [
  SampleAComponent,
  SampleBComponent,
  SampleCComponent
];

@NgModule({
  declarations: modules,
  exports: modules,
  imports: [CommonModule, MaterialModule],
  providers: [RecipientsService]
})
export class SamplesModule { }
