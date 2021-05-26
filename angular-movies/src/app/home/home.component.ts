import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ngOnInit(): void{
    this.moviesInTheater=[{
      title:'Spider-Man',
      releaseDate: new Date(),
      price: 1499.99,
      poster: 'https://upload.wikimedia.org/wikipedia/en/0/02/The_Amazing_Spider-Man_theatrical_poster.jpeg'
    },
    {
      title:'Moan',
      releaseDate: new Date('2021-05-16'),
      price: 300.99,
      poster: 'https://c4.wallpaperflare.com/wallpaper/618/920/952/8k-maui-moana-wallpaper-preview.jpg'
    }];
    this.moviesFutureReleases=[];
  }

  moviesInTheater;
  moviesFutureReleases;
}
