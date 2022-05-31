import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  constructor(private httpClient:HttpClient) { }

  getMeeting(){
    return this.httpClient.get<any[]> ("./../../assets/json/meeting.json")
  }
}
