import { actorCreationDTO } from './../actors.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-actors',
  templateUrl: './create-actors.component.html',
  styleUrls: ['./create-actors.component.css']
})
export class CreateActorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  saveChanges(actorCreationDTO: actorCreationDTO){
    console.log(actorCreationDTO);
  }
}
