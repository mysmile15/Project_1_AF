import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clientsObservable: Observable<any[]> = new Observable();

  clientsStatusIdx: number = 0;
  clientsStatus:{ name:string; value:number }[] = [
    { name: 'Created', value:0 },
    { name: 'Accepted', value:1},
    { name: 'Declined', value:2 },
    { name: 'Cancelled', value:3 },
  ];

  viewClientsBool: boolean = false;
  viewClientsIdx: number | undefined;
  clientsModel: any;


  constructor(private clientsService : ClientsService) { }

  ngOnInit(): void {
    this.clientsObservable = this.clientsService.getClients();
  }

  openViewModal(clientsModel: any, viewClientsIdx: number){
    this.viewClientsBool = true;
    this.viewClientsIdx = viewClientsIdx;
    this.clientsModel = clientsModel;
  }

  closeViewModal(){
    delete this.viewClientsIdx;
    delete this.clientsModel;
    this.viewClientsBool = false;

  }

}
