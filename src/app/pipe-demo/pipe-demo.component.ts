import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {

  filteredText = ''

  listofTodos = [{
    name  :  "Some work",
    status :"Done"
  },{
    name  :  "Some work",
    status :"Pending"
  },{
    name  :  "Some work",
    status :"Done"
  },{
    name  :  "Some work",
    status :"Pending"
  }]

  addTodos() {
    this.listofTodos.push({
      name  :  "New work",
      status :"Pending"
    })
  }
  contactNumber : number = 8197355296;

  myData = new Promise((resolve, reject) =>  {
    setTimeout(() => resolve("Data Arrived"), 800);
  })
  constructor() { }

  ngOnInit() {
  }

}
