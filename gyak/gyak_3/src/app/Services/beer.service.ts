import { Injectable } from '@angular/core';
import { BEERS } from '../MockData';
import Beer from '../Interfaces/Beer.interface';
@Injectable({
  providedIn: 'root'
})
export class BeerService {
  beers:Beer[] 

  constructor() { 

    this.beers = BEERS
  }


  getBeers():Beer[]{
    return this.beers
  }
  createBeer(beer:Beer):void{
    this.beers.push(beer)
  }
  destroyBeer(id:number):void{
    this.beers.splice(id,1)
  }
  editBeer( beer:Beer):void{
    
     let i = 0;
    while(i < this.beers.length && beer.id !== this.beers[i].id){
      i++
    }
    if(i < this.beers.length) this.beers[i] = beer
    console.log(i)
    console.log(this.beers)
    
    console.log(beer)
  }
}
