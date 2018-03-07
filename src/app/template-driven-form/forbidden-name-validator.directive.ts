import { Directive, Input } from "@angular/core";
import { NG_VALIDATORS, AbstractControl, ValidatorFn } from "@angular/forms";

@Directive({
  selector: "[appForbiddenName]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ForbiddenNameValidatorDirective,
      multi: true
    }
  ]
})
export class ForbiddenNameValidatorDirective {
  constructor() {}

  @Input("appForbiddenName") appForbiddenName: string;

  validate(control: AbstractControl): { [key: string]: any } {
    return this.appForbiddenName
      ? forbiddenNameValidator(new RegExp(this.appForbiddenName, "i"))(control)
      : null;
  }
}

export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? { forbiddenName: { value: control.value } } : null;
  };
}
