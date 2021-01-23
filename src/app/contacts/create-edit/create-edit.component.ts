import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-edit',
  templateUrl: './create-edit.component.html',
  styleUrls: ['./create-edit.component.scss']
})
export class CreateEditContactsComponent implements OnInit {
  CreateEdiForm = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor() { }

  ngOnInit() {
  }

  createContact() {
    if (this.CreateEdiForm.valid) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Salvo com Sucesso',
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Ops ...',
        text: 'Preencha todos os campos',
      });
    }
  }
}
