import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-my-second-counter',
  templateUrl: './my-second-counter.component.html',
  styleUrls: ['./my-second-counter.component.css']
})
export class MySecondCounterComponent implements OnInit {

  constructor( private theCounter:CounterService) { }

  ngOnInit() {
  }
  incrementCounter(){
    this.theCounter.increment();
  }
}




//both increments change in the same time since they
//use the same singleton service, everyone points in the same service

//service is bunch functions which everyone using the app can use
