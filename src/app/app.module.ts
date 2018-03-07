import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ForbiddenNameValidatorDirective } from './template-driven-form/forbidden-name-validator.directive';


@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    ForbiddenNameValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
