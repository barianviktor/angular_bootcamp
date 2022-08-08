import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Movie from '../Models/Movie';

@Component({
  selector: 'app-creater',
  templateUrl: './creater.component.html',
  styleUrls: ['./creater.component.css'],
})
export class CreaterComponent implements OnInit {
  constructor() {
    const movie = new Movie(
      this.movieCount + 1,
      'A gyilkos jarat',
      'train train bullet train',
      5.6,
      'https://filmlexikon.hu/media/movies/posters/a/a-gyilkos-jarat--2022--qDu2YjIYKT.jpg'
    );
    setInterval(() => {
      this.movieAdded.emit(movie);
    }, 500);
  }
  @Input() movieCount!: number;
  @Output() movieAdded = new EventEmitter<Movie>();
  ngOnInit(): void {}
  addMovie(
    titleInput: HTMLInputElement,
    descInput: HTMLInputElement,
    imagPathInput: HTMLInputElement,
    ratingInput: HTMLInputElement
  ) {
    const movie = new Movie(
      this.movieCount + 1,
      titleInput.value,
      descInput.value,
      parseInt(ratingInput.value),
      imagPathInput.value
    );
    this.movieAdded.emit(movie);
    console.log(movie);
  }
}
