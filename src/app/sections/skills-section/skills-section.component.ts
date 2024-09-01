import { Component } from '@angular/core';
import { SkillsInfo } from 'src/app/models/SkillsInfo';
@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.scss'],
})
export class SkillsSectionComponent {
  skills: SkillsInfo[] = [
    {
      category: 'PROGRAMMING_LANGUAGES',
      skills: [
        { name: 'Python', level: 'EXPERIENCED', iconPath: './assets/logos/python.png' },
        { name: 'Java', level: 'EXPERIENCED', iconPath: './assets/logos/java.png' },
        { name: 'C++', level: 'INTERMEDIATE', iconPath: './assets/logos/c++.png' },
        { name: 'C', level: 'INTERMEDIATE', iconPath: './assets/logos/c.png' },
        { name: 'C#', level: 'BASIC', iconPath: './assets/logos/c-sharp.png' },
      ],
    },
    {
      category: 'WEB_DEVELOPMENT', 
      skills: [
        { name: 'HTML5', level: 'EXPERIENCED', iconPath: './assets/logos/html.png' },
        { name: 'CSS3', level: 'EXPERIENCED', iconPath: './assets/logos/css.png' },
        { name: 'JavaScript', level: 'INTERMEDIATE', iconPath: './assets/logos/js.png' },
        { name: 'TypeScript', level: 'INTERMEDIATE', iconPath: './assets/logos/ts.png' },
        { name: 'Spring Boot', level: 'EXPERIENCED', iconPath: './assets/logos/springboot.png' },
        { name: 'React JS', level: 'BASIC', iconPath: './assets/logos/react.png' },
        { name: 'Angular', level: 'INTERMEDIATE', iconPath: './assets/logos/angular.svg' },
      ],
    },
    {
      category: 'DATABASES',
      skills: [
        { name: 'MySQL', level: 'EXPERIENCED', iconPath: './assets/logos/mysql.png' },
        { name: 'SQL3', level: 'EXPERIENCED', iconPath: './assets/logos/sql3.png' },
      ],
    },
    {
      category: 'CLOUD_COMPUTING', 
      skills: [
        { name: 'Amazon Web Services', level: 'INTERMEDIATE', iconPath: './assets/logos/aws.webp' },
        { name: 'Microsoft Azure', level: 'BASIC', iconPath: './assets/logos/azure.png' },
      ],
    },
    {
      category: 'TESTING', 
      skills: [
        { name: 'JUnit', level: 'INTERMEDIATE', iconPath: './assets/logos/junit.png' },
        { name: 'Mockito', level: 'BASIC', iconPath: './assets/logos/mockito.png' },
        { name: 'Postman', level: 'EXPERIENCED', iconPath: './assets/logos/postman.png' },
      ],
    },
    {
      category: 'VERSION_CONTROL', 
      skills: [
        { name: 'Git', level: 'INTERMEDIATE', iconPath: './assets/logos/git.png' },
        { name: 'GitHub', level: 'INTERMEDIATE', iconPath: './assets/logos/github.png' },
        { name: 'BitBucket', level: 'INTERMEDIATE', iconPath: './assets/logos/bitbucket.png' },
      ],
    },
    {
      category: 'COLLABORATIVE_TOOLS', 
      skills: [
        { name: 'Jira', level: 'BASIC', iconPath: './assets/logos/jira.png' },
      ],
    },
    {
      category: 'CONTAINERIZATION', 
      skills: [
        { name: 'Docker', level: 'BASIC', iconPath: './assets/logos/docker.png' },
      ],
    },
  ];
  
  
  
}
