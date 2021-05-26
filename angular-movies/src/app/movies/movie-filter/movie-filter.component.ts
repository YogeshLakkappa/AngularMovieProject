import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrls: ['./movie-filter.component.css']
})
export class MovieFilterComponent implements OnInit {

  constructor(private FormBuilder: FormBuilder) { }

  form: FormGroup;

  genres = [{id: 1, name: 'Drama'}, {id: 2 , name: 'Action'}];

  movies = [
    {title: 'Spider-Man', poster:'https://upload.wikimedia.org/wikipedia/en/0/02/The_Amazing_Spider-Man_theatrical_poster.jpeg'},
    {title: 'Moan', poster:'https://c4.wallpaperflare.com/wallpaper/618/920/952/8k-maui-moana-wallpaper-preview.jpg'},
    {title: 'Inception', poster:'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg'},
  ]

  originalMovies = this.movies;

  ngOnInit(): void {
    this.form=this.FormBuilder.group({
      title: '',
      genreId: 0,
      upcomingReleases: false,
      inTheaters: false
    });
    this.form.valueChanges.subscribe(values => {
      this.movies = this.originalMovies;
      this.filterMovies(values);
    });
  }

filterMovies(values: any){
  if(values.title){
    this.movies=this.movies.filter(movie => movie.title.indexOf(values.title)!== -1);
  }
}

  clearForm(){
    this.form.reset();
  }
}
