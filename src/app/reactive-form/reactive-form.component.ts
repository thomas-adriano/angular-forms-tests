import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  ValidatorFn
} from "@angular/forms";
import { Person } from "../model/person";

@Component({
  selector: "app-reactive-form",
  templateUrl: "./reactive-form.component.html",
  styleUrls: ["./reactive-form.component.css"]
})
export class ReactiveFormComponent implements OnInit {
  private testPerson = new Person(
    "test@mail.com",
    "Nice Person",
    "Nice Country",
    "Nice Lang"
  );
  reactiveForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {}

  onSubmit() {
    console.log("submitting...");
    console.log(this.reactiveForm);
  }

  fillForm() {
    this.reactiveForm.setValue(this.testPerson);
  }

  resetPartial() {
    this.reactiveForm.reset({
      email: this.testPerson.email,
      name: this.testPerson.name
    });
  }

  private createForm() {
    this.reactiveForm = this.fb.group({
      email: ["", Validators.required],
      name: ["", [Validators.required, forbiddenNameValidator(/thomas/i)]],
      country: ["", Validators.required],
      language: ""
    });
    this.reactiveForm.valueChanges.forEach((value: string) =>
      console.log(value)
    );
  }
}

export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? {'forbiddenName': {value: control.value}} : null;
  };
}
