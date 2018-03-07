import { Component, OnInit, ViewChild, OnChanges, SimpleChanges, Input } from "@angular/core";
import { Person } from "../model/person";
import {
  FormGroup,
} from "@angular/forms";

@Component({
  selector: "app-template-driven-form",
  templateUrl: "./template-driven-form.component.html",
  styleUrls: ["./template-driven-form.component.css"],
})
export class TemplateDrivenFormComponent implements OnInit, OnChanges {
  private testPerson = new Person(
    "test@mail.com",
    "Nice Person",
    "Nice Country",
    "Nice Lang"
  );
  @ViewChild("templateDrivenForm") templateDrivenForm: FormGroup;
  public model = Person.nullInstance();

  constructor() {
  }

  ngOnInit() {
    this.templateDrivenForm.valueChanges.forEach((value: string) =>
    console.log(value)
  );
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  onSubmit() {
    console.log("submitting...");
    console.log(this.model);
  }

  fillForm() {
    this.model = { ...this.testPerson };
  }

  resetPartial() {
    this.templateDrivenForm.reset({
      email: this.testPerson.email,
      name: this.testPerson.name
    });
  }
}
