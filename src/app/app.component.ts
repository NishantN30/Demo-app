import { Component } from '@angular/core';
import { User } from './model/user';
import { DataService } from './service/data.service';

//import { USER_DATA } from './data/mocks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  childEmittedEvent(data) {
    this.title = data;
  }
constructor(private dataservice : DataService) {

}
  users : User[];

  ngOnInit() {
    //this.users = this.dataservice.getUserData();
    this.dataservice.getUserData()
    .subscribe(user=>{ console.log(user); this.users= user},
    (err)=> console.log(err),
  () => console.log("Completed"))
  }
  

}
