import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote-item',
  templateUrl: './quote-item.component.html',
  styleUrls: ['./quote-item.component.css']
})
export class QuoteItemComponent implements OnInit {

  @Input() quote: any;
  @Output() onDelete = new EventEmitter<string>();


  constructor() { }

  ngOnInit() {
    console.log('ITEM COMPONENT', this.quote)
  }
  
  // this function emit the id of the quote we want to delete
  // and emits it to removeQuote method that is called

  onQuoteDelete(){
    this.onDelete.emit(this.quote.id);
  }
}
