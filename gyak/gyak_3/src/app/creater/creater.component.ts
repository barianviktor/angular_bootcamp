import { Component, EventEmitter, OnInit } from '@angular/core';
import Beer from '../Interfaces/Beer.interface';
import { BeerService } from '../Services/beer.service';

@Component({
  selector: 'app-creater',
  templateUrl: './creater.component.html',
  styleUrls: ['./creater.component.css']
})
export class CreaterComponent implements OnInit {
  beer:Beer = {
    id:0,
    name:'Fallout Beer',
    desc:'horike sidegen',
    first_brewed:'08/2005',
    img_url:'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2022%2F05%2F27%2FBest-Beers-to-Drink-at-BBQ-FT-BLOG0522.jpg&q=60',
    abv:3.7,
    tips:'ovatosba ne legyen meleg'
  }
  constructor(private beerService:BeerService) { }

  ngOnInit(): void {
  }
  onCreateBeer(){
    this.beerService.createBeer(this.beer)
  }
}
