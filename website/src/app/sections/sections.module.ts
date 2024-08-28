import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileSectionComponent } from './profile-section/profile-section.component';

const components = [
  ProfileSectionComponent
];

@NgModule({
  declarations: [
    ProfileSectionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    components
  ]
})
export class SectionsModule { }
