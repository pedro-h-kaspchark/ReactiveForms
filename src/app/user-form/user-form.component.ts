import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  reactiveForm = new FormGroup({
    nome: new FormControl(''),
    email: new FormControl('', [Validators.email])
  });

  enviar() {
    if (this.reactiveForm.invalid) {
      this.reactiveForm.markAllAsTouched();
      return;
    }
    else{
      console.log(this.reactiveForm.value);
      this.reactiveForm.reset({
        nome : (''),
        email : ('')
      })
    }
  }
}
