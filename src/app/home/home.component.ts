import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../src/environments/environment';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

      //totalAngularPackages: any;
      users: any[] = [];

      constructor(private http: HttpClient) { }
  
      ngOnInit() {
    
        //const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' }
        this.http.get<any[]>(`${environment.apiHost}/api/orderlist`, { withCredentials: true }).subscribe({
            next: data => {
                this.users = data;
            },
            error: error => {
                console.error ('Erro ao processar o pedido!', error);
            }
        })
    }
  

}

interface SearchResults {
  total: number;
  results: Array<object>;
}
