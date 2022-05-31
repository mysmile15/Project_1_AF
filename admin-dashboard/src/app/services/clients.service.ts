import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private httpClient:HttpClient) { }

  getClients(){
    return this.httpClient.get<any[]> ("./../../assets/json/clients.json")
  }

}
