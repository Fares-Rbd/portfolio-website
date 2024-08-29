import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';

const components = [FooterComponent];

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule],
  exports: [components],
})
export class FooterModule {}
