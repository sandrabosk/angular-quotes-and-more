import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { CharactersService } from './characters.service';
import { CounterService } from './counter.service';

import * as _ from 'underscore';


import { AppComponent } from './app.component';
import { QuoteListComponent } from './quote-list/quote-list.component';
import { MyHomeComponent } from './my-home/my-home.component';
import { MyAboutComponent } from './my-about/my-about.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactComponent } from './contact/contact.component';
import { CountersComponent } from './counters/counters.component';
import { ChuckNorrisPageComponent } from './chuck-norris-page/chuck-norris-page.component';
import { QuoteItemComponent } from './quote-item/quote-item.component';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { MySecondCounterComponent } from './my-second-counter/my-second-counter.component';

//here goes Routes
//when i go to this page what component should i use-> routes give answer to this
//this under is called ROUTING TABLE, that is an array full of objects (path thing)

const routes: Routes = [

  //http://localhost:4200/quotes
{ path: 'quotes', component: QuoteListComponent },
  //http://localhost:4200/home
{ path: 'home', component: MyHomeComponent },
  //http://localhost:4200/about
{ path:'about', component: MyAboutComponent },

  // http://localhost:4200
  //  |
  //  ---> http://localhost:4200/home
  // pathMatch:'full'==> this is to match blank before redirecting to home
{ path: '', redirectTo:'home', pathMatch:'full' },

{ path: 'contacts', component: ContactListComponent },

  //http://localhost:4200/contact/3
  //:id = 3
{ path:'contact/:id', component: ContactComponent },

{ path:'counters', component: CountersComponent },

{ path:'chuck', component: ChuckNorrisPageComponent }

]


@NgModule({
  declarations: [
    AppComponent,
    QuoteListComponent,
    MyHomeComponent,
    MyAboutComponent,
    ContactListComponent,
    ContactComponent,
    CountersComponent,
    ChuckNorrisPageComponent,
    QuoteItemComponent,
    MyCounterComponent,
    MySecondCounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],

  // this is important for injection! first we have to import it and then to
  // include it into providers
  providers: [CharactersService, CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
