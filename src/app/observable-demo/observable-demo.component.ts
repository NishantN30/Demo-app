import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import 'rxjs/Rx'
@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css']
})
export class ObservableDemoComponent  {


  numbers : number

  data = Observable.interval(1000)
            .subscribe(data => this.numbers = data)

  stop() {
    this.data.unsubscribe();
  }
  constructor() { }

  ngOnInit() {
  }

}
