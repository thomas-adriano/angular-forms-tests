export class Person {
  constructor(public email: string, public name: string, public country: string, public language: string) { }

  public static nullInstance() {
    return new Person("", "", "", "");
  }
}
