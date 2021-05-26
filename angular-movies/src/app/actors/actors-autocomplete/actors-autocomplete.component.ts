import { actorCreationDTO } from './../actors.model';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-actors-autocomplete',
  templateUrl: './actors-autocomplete.component.html',
  styleUrls: ['./actors-autocomplete.component.css']
})
export class ActorsAutocompleteComponent implements OnInit {

  constructor() { }

  control: FormControl= new FormControl();

  actors = [
    {name: 'Tom Holland', picture: 'https://i.pinimg.com/originals/e4/fb/dd/e4fbdd5628d84b9537183d774f21cae6.jpg'},
    {name: 'Tom Hanks', picture: 'http://images.fandango.com/ImageRenderer/300/0/redesign/static/img/default_poster.png/0/images/masterrepository/performer%20images/p93341/savingmrbanks-pm-4.jpg'},
    {name: 'Samuel L. Jackson', picture: 'https://cdn.britannica.com/77/191077-050-63262B99/Samuel-L-Jackson.jpg'}
  ]

  selectedActors = [];

  originalActors = this.actors;

  columnsToDisplay = ['picture', 'name', 'character', 'actions']

  @ViewChild(MatTable) table: MatTable<any>;

  ngOnInit(): void {
    this.control.valueChanges.subscribe(value=> {
      this.actors = this.originalActors;
      this.actors = this.actors.filter(actor => actor.name.indexOf(value) !== -1)
    })
  }

  optionSelected(event: MatAutocompleteSelectedEvent){
    console.log(event.option.value);
    this.selectedActors.push(event.option.value);
    this.control.patchValue('');
    if(this.table !== undefined){
      this.table.renderRows();
    }
  }

  remove(actor){
    const index=this.selectedActors.findIndex(a => a.name === actor.name);
    this.selectedActors.splice(index,1);
    this.table.renderRows();
  }

  dropped(event: CdkDragDrop<any[]>){
    const previousIndex=this.selectedActors.findIndex(actor => actor === event.item.data);
    moveItemInArray(this.selectedActors,previousIndex,event.currentIndex)
    this.table.renderRows();
  }
}
