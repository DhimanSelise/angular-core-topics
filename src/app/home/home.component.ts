import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  newTask = ""
  tasks = [
    'eat',
    'sleep',
    'code',
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addTask(task: string) {
    this.tasks.push(task);
    this.newTask = "";
  }

  delete(task: string) {
    this.tasks = this.tasks.filter(t => t != task);
  }

}
