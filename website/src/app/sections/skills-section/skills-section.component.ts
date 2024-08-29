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
      category: 'Cloud Computing',
      skills: [
        { name: 'Amazon Web Services', level: 'Intermediate' },
        { name: 'Microsoft Azure', level: 'Basic' },
      ],
    },
    {
      category: 'Programming Languages',
      skills: [
        { name: 'Python', level: 'Experienced' },
        { name: 'Java', level: 'Experienced' },
        { name: 'C++', level: 'Intermediate' },
        { name: 'C', level: 'Intermediate' },
        { name: 'C#', level: 'Basic' },
      ],
    },
    {
      category: 'Web Development',
      skills: [
        { name: 'HTML5', level: 'Experienced' },
        { name: 'CSS3', level: 'Experienced' },
        { name: 'JavaScript', level: 'Intermediate' },
        { name: 'TypeScript', level: 'Intermediate' },
        { name: 'Spring Boot', level: 'Experienced' },
        { name: 'React JS', level: 'Basic' },
        { name: 'Angular', level: 'Intermediate' },
      ],
    },
    {
      category: 'Databases',
      skills: [
        { name: 'MySQL', level: 'Experienced' },
        { name: 'SQL3', level: 'Experienced' },
      ],
    },
    {
      category: 'Testing',
      skills: [
        { name: 'JUnit', level: 'Intermediate' },
        { name: 'Mockito', level: 'Basic' },
        { name: 'Postman', level: 'Experienced' },
      ],
    },
    {
      category: 'Collaborative Tools',
      skills: [
        { name: 'Git', level: 'Intermediate' },
        { name: 'Jira', level: 'Basic' },
        { name: 'BitBucket', level: 'Intermediate' },
      ],
    },
    {
      category: 'Containerization',
      skills: [{ name: 'Docker', level: 'Basic' }],
    },
    {
      category: 'Modeling',
      skills: [
        { name: 'Merise', level: 'Intermediate' },
        { name: 'UML', level: 'Intermediate' },
      ],
    },
  ];
}
