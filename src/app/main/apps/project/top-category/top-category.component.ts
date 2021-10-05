import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-category',
  templateUrl: './top-category.component.html',
  styleUrls: ['./top-category.component.scss']
})
export class TopCategoryComponent implements OnInit {

  projects: any[];
  selectedProject: any;

  constructor() { }

  ngOnInit(): void {
    // this.projects = ["Exam", "Practice", "Quiz"]
    this.projects = [
      {
        'name': 'Exam'
      },
      {
        'name': 'Practice'
      },
      {
        'name': 'Quiz'
      },
    ]
    this.selectedProject = this.projects[0]

  }

}
