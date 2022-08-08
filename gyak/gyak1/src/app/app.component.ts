import { Component } from '@angular/core';
import Movie from './Models/Movie';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  movies: Movie[] = [
    new Movie(
      1,
      'Doctor Strange az őrület ',
      'Doctor Strange teams up with a mysterious teenage girl from his dreams who can travel across multiverses, to battle multiple threats, including other-universe versions of himself, which ',
      7,
      'https://images-na.ssl-images-amazon.com/images/I/81eZzxbS3mL.jpg'
    ),
    new Movie(
      2,
      'Pókember: Nincs hazaút',
      'eter Parker lelepleződik, már nem tudja elválasztani a normális és a szuperhős életét. Amikor Strange segítségét kéri, a tét még veszélyesebbé válik, és arra kényszeríti, hogy felfedezze, ',
      8,
      'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/nKFco1gLSpSwAb9Z8ZjDjM1Byol.jpg'
    ),
    new Movie(
      3,
      'Batman',
      'A bűnözés elleni küzdelem második évében Batman olyan korrupciót tár fel Gotham Cityben, amely a saját családjához kötődik, miközben szembesül a Rébusz néven ismert sorozatgyilkossal.',
      7.8,
      'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/oAlu5zs0noqOADpDyDi72FMjiGx.jpg'
    ),
  ];
  onMovieAdded(movie: Movie) {
    this.movies.push(movie);
  }
}
