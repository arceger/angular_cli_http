import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../src/environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})


export class RegisterComponent implements OnInit{
  callForm: FormGroup | null = null;
  call: any;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.callForm = this.fb.group({
      status: ['', Validators.required],
      defeito: ['', Validators.required]
    });
  }

  ngOnInit() {
    const callId = +this.route.snapshot.paramMap.get('id')!;
    this.http.get<any>(`https://ordersrvdocker.onrender.com/api/listcal/` + callId).subscribe(data => {
      this.call = data;
      if (this.call && this.call.status !== undefined) {
        this.callForm?.setValue({
          status: this.call.status,
          defeito: this.call.defeito
        });
      }
    });
  }

  updateCall() {
    const callId = +this.route.snapshot.paramMap.get('id')!;
    const dadosAtualizados = {
      status: this.callForm?.get('status')?.value,
      defeito: this.callForm?.get('defeito')?.value
    };

   // this.http.put<any>(`${environment.apiHost}/api/updateOrder/` + callId, dadosAtualizados)
    this.http.put<any>(`https://ordersrvdocker.onrender.com/api/updateOrder/` + callId, dadosAtualizados)
      .subscribe(response => {
        console.log('Chamado atualizado com sucesso!', response);
        this.router.navigate(['/home']);
      });
  }

  goBack() {
    this.router.navigate(['/home']);
  }
}