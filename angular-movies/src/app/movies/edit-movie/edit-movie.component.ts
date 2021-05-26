import { movieCreationDTO, movieDTO } from './../movies.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  model: movieDTO = {title: 'Spider-Man', inTheaters: true, summary:"whatever", releaseDate: new Date(), trailer: 'ABCED', poster:'https://upload.wikimedia.org/wikipedia/en/thumb/9/94/Spider-Man_2_Game_Cover.jpg/220px-Spider-Man_2_Game_Cover.jpg'}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {

    });
  }

  saveChanges(movieCreationDTO: movieCreationDTO){

  }

}
