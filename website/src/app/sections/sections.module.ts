import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileSectionComponent } from './profile-section/profile-section.component';
import { SectionsComponent } from './sections.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { SkillsSectionComponent } from './skills-section/skills-section.component';
import { ProjectsSectionComponent } from './projects-section/projects-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';

const components = [SectionsComponent, ProfileSectionComponent];

@NgModule({
  declarations: [
    ProfileSectionComponent,
    SectionsComponent,
    AboutSectionComponent,
    SkillsSectionComponent,
    ProjectsSectionComponent,
    ContactSectionComponent,
  ],
  imports: [CommonModule],
  exports: [components],
})
export class SectionsModule {}
