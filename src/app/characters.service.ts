import { Injectable } from '@angular/core';

// these two are services that angular gives to us
//  http and headers
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CharactersService {
  constructor (private myHttp: Http){}
  fetchCharacters(){
  //here we return whole promise, all 3 lines are return not just this.myHttp....

  return this.myHttp.get('https://ih-api.herokuapp.com/characters')
    .toPromise()
    .then(myApiString => myApiString.json())
  }

  postCharacter(characterInfo){
    const headers = new Headers ({ 'Content-Type':'application/json' });
    const options = { headers: headers };

    return this.myHttp.post(
      'https://ih-api.herokuapp.com/characters',
      characterInfo,
      options
    )
    .toPromise()
    .then(myApiString => myApiString.json())
  }
}
