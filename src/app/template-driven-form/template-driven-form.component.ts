import { Component, OnInit } from '@angular/core';
import { Person } from '../model/person';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  public model = new Person("test@mail.com", "Test Name", "Test Country", "Test Language");

  constructor() { }

  ngOnInit() {

  }

  onSubmit() {
    console.log("submitting...");
    console.log(this.model);
  }

}
