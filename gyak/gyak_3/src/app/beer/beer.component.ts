import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Beer from '../Interfaces/Beer.interface';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {
  @Input() beer:Beer
  @Input() index:number
  @Output() destroy:EventEmitter<number> = new EventEmitter<number>()
  openEditor:boolean = false
  constructor() { }

  ngOnInit(): void {
  }
  onDestroy(){
  // console.log(id)
   //this.destroy.emit(id)
    this.destroy.emit(this.index)
  }
  changeEditor(){
    this.openEditor = !this.openEditor
  }
  getClonedBeer():Beer{
/*     const newBeer: Beer = {
      id:this.beer.id,
      name:this.beer.name,
      first_brewed:this.beer.first_brewed,
      desc:this.beer.desc,
      img_url:this.beer.img_url,
      tips:this.beer.tips,
      abv:this.beer.abv
    }
 */
    return  structuredClone(this.beer)
  }
}
