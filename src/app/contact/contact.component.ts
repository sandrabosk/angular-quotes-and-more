import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactId: string;
  contactName: string;

  constructor( private myRoute: ActivatedRoute ) { }

  // this is called DEPENDENCY INJECTION because we depend on this singleton
  // service.

  // most services will be imported through constructor and those are all examples of
  // DEPENDENCY INJECTION, we depend on them.

  // ActivatedRoute => this is a service
  //   |
  //  this can be only once in the whole app and it gets to be passed around
  // we use ActivatedRoute when we want to access to something in the route

  // ActivatedRoute -> is the route we are using now
  // subscribe is how we view our parameters

  ngOnInit() {

    this.myRoute.params.subscribe(( paramsResult ) => {
      this.contactId = paramsResult ['id'];

    });
  }

}
