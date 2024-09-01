import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { TranslateModule } from '@ngx-translate/core';

const components = [FooterComponent];

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule,TranslateModule],
  exports: [components],
})
export class FooterModule {}
