import { Component } from '@angular/core';
import { ProjectInfo } from 'src/app/models/ProjectInfo';
@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.scss'],
})
export class ProjectsSectionComponent {
  projects: ProjectInfo[] = [
    {
      projectTitle: 'Book Social Network',
      coverImageUrl: './assets/BSN.jpg',
      githubLink: 'https://github.com/Fares-Rbd/book-social-network',
    },
    {
      projectTitle: 'Hotel Management Web App',
      coverImageUrl: './assets/HM.png',
      githubLink: 'https://github.com/Fares-Rbd/JEE_Projects/tree/master',
    },
    {
      projectTitle: 'Library Web Application',
      coverImageUrl: './assets/BM.png',
      githubLink: 'https://github.com/Fares-Rbd/LibraryWebApp/',
    },
  ];

  openGitHub(url: string): void {
    window.open(url, '_blank');
  }
}
