import { Component, OnInit } from '@angular/core';
import { ProjectService } from './project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  providers: [ProjectService]
})

export class ProjectComponent implements OnInit {

  fullImagePath: string;
  allProjects: any[];

  constructor(private projectService: ProjectService) { 
  	this.fullImagePath = '/assets/images/obe.jpg'
  }

  ngOnInit() {
  	this.projectList();
  	//debugger;
  }

  projectList() {
    this.projectService.getProjects().then(response => {
      console.log("Got response:", response.data);
      this.allProjects = response.data;
    }).catch(error => {
      console.log("Got error:", error);
    }).then(response => {
      console.log("Another response:", response);
    }).catch(error => {
      console.log("Got another error:", error);
    });
  }

}
