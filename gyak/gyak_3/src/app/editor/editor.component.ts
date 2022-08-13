import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import Beer from '../Interfaces/Beer.interface';
import { BeerService } from '../Services/beer.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  @Input() beer:Beer
  
  @Output() editorClosed = new EventEmitter<any>()
  @ViewChild('beerNameInput' ) beerNameInput:ElementRef
  @ViewChild('beerDescInput' ) beerDescInput:ElementRef
  @ViewChild('beerFirstBrewed' ) beerFirstBrewed:ElementRef
  @ViewChild('beerImgUrl' ) beerImgUrl:ElementRef
  @ViewChild('beerTips' ) beerTips:ElementRef
  @ViewChild('beerAbv' ) beerAbv:ElementRef
  constructor(private beerService:BeerService) { }

  ngOnInit(): void {
    console.log(this.beer)
  }
  editTheBeer(){
    console.log(this.beer)
    const editedBeer:Beer = {
      id:this.beer.id,
      name:this.beerNameInput.nativeElement.value,
      desc:this.beerDescInput.nativeElement.value,
      first_brewed:this.beerFirstBrewed.nativeElement.value,
      img_url:this.beerImgUrl.nativeElement.value,
      tips:this.beerTips.nativeElement.value,
      abv:this.beerAbv.nativeElement.value
    }
    this.beerService.editBeer(editedBeer)
    this.closeBeerEditor()
  }
  
  closeBeerEditor():void{
    this.editorClosed.emit()
  }
}
