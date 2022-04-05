import { Component, OnInit } from '@angular/core';

import { TaskService } from '../../service/task.service';

import { Task } from '../../Task';

import { HttpClient, HttpHandler } from '@angular/common/http';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];

  constructor(
    private TaskService: TaskService
  ){ }


  ngOnInit(): void {
    this.TaskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks
    });
  }

}
