import { genreCreationDTO } from './../genres.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.css']
})
export class CreateGenreComponent implements OnInit {

  constructor(private router: Router) { }
  ngOnInit(): void {
  }

  saveChanges(genreCreationDTO: genreCreationDTO){
    // .. save the genre
    console.log(genreCreationDTO);
    this.router.navigate(['/genres'])
  }
}
