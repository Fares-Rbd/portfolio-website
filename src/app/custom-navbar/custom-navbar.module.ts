import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

import { TranslateModule } from '@ngx-translate/core';


const components = [
  NavbarComponent
];

@NgModule({
  declarations: [
    components
  ],
  imports: [
    CommonModule,
    NzButtonModule,
    NzDropDownModule,
    TranslateModule
  ],
  exports: [
    components
  ]
})
export class CustomNavbarModule { }
