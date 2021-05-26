import { firstLetterUpperCase } from 'src/app/Validators/firstLetterUpperCase';
import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { genreCreationDTO } from '../genres.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-genre',
  templateUrl: './form-genre.component.html',
  styleUrls: ['./form-genre.component.css']
})
export class FormGenreComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  @Input()
  model: genreCreationDTO;

  form: FormGroup;

  @Output()
  onSaveChanges: EventEmitter<genreCreationDTO> = new EventEmitter<genreCreationDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['',{
          validators:[Validators.required, Validators.minLength(3),firstLetterUpperCase()]
      }]
    });
    if(this.model !== undefined){
      this.form.patchValue(this.model);
    }
  }

  saveChanges(){
    // .. save the genre
    this.onSaveChanges.emit(this.form.value);
  }

  getErrorMessageFieldName(){
    const field=this.form.get('name');

    if(field.hasError('required')){
      return 'The name field is required';
    }

    if(field.hasError('minlength')){
      return 'The minimum length is 3'
    }

    if(field.hasError('firstLetterUppercase')){
      return field.getError('firstLetterUppercase').message;
    }
    return '';
  }
}
