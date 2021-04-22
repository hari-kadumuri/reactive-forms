import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // registrationForm = new FormGroup({
  //   userName: new FormControl('hari'),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     postalCode: new FormControl('')
  //   })
  // });

  registrationForm = this.fb.group({
    userName: ['hari'],
    password: [''],
    confirmPassword: [''],
    address: this.fb.group({
      city: [''],
      state: [''],
      postalCode: ['']
    })
  });

  constructor(private fb: FormBuilder) {}

  // loadApiData() {
  //   this.registrationForm.setValue({
  //     userName: 'Bruce',
  //     password: 'test',
  //     confirmPassword: 'test',
  //     address: {
  //       city: 'City',
  //       state: 'State',
  //       postalCode: '123456'
  //     }
  //   })
  // }
}
