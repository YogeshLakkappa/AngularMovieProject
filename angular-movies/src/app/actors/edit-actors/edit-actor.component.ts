import { actorCreationDTO, actorDTO } from './../actors.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-actor',
  templateUrl: './edit-actor.component.html',
  styleUrls: ['./edit-actor.component.css'],
})
export class EditActorComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  model: actorDTO = {
    name: 'Tom Holland',
    dateOfBirth: new Date(),
    biography: 'default value',
    picture:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tom_Holland_by_Gage_Skidmore.jpg/170px-Tom_Holland_by_Gage_Skidmore.jpg'
  };

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      //alert(params.id);
    });
  }

  saveChanges(actorCreationDTO: actorCreationDTO) {
    console.log(actorCreationDTO);
  }
}
