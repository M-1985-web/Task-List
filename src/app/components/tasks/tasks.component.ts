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
    // like promise
    this.TaskService.getTasks().subscribe((tasks)=>[
      this.tasks = tasks
    ]);
    
  }

  deleteTask(task: Task){
    this.TaskService.deleteTask(task).subscribe(() => [this.tasks = this.tasks.filter(t => (t.id !== task.id))
    ]);
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder
    this.TaskService.updateTaskReminder(task).subscribe();
  }

  addTask(task: Task) {
    this.TaskService.addTask(task).subscribe((task) =>( 
      this.tasks.push(task)
    ))
  }



}
