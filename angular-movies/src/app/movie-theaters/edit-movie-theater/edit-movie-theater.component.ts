import { movieTheatersCreationDTO, movieTheatersDTO } from './../movie-theaters.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-movie-theater',
  templateUrl: './edit-movie-theater.component.html',
  styleUrls: ['./edit-movie-theater.component.css']
})
export class EditMovieTheaterComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

model: movieTheatersDTO={name: 'K.S.R.T.C Layout', latitude: 12.294840714186215, longitude: 76.70834541320801};

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {

    });
  }

  saveChanges(movieTheater: movieTheatersCreationDTO){

  }
}
