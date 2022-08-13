import { Component, OnInit } from '@angular/core';
import Beer from '../Interfaces/Beer.interface';
import { BeerService } from '../Services/beer.service';
@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {
  beers:Beer[]
  
  constructor(public beerService:BeerService) {}

  ngOnInit(): void {
    this.beers = this.beerService.getBeers()
    console.log(this.beers)
  }
  handleDestroy(id:number){
    this.beerService.destroyBeer(id)
  }

}
