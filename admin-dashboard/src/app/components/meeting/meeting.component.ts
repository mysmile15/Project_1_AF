import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MeetingService } from 'src/app/services/meeting.service';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css']
})
export class MeetingComponent implements OnInit {

  meetingObservable: Observable<any[]> = new Observable();

  meetingStatusIdx: number = 0;
  meetingStatus:{ name:string; value:number }[] = [
    { name: 'Created', value:0 },
    { name: 'Accepted', value:1},
    { name: 'Declined', value:2 },
    { name: 'Cancelled', value:3 },
  ];

  viewMeetingBool: boolean = false;
  viewMeetingIdx: number | undefined;
  meetingModel: any;

  constructor(private meetingService : MeetingService) { }

  ngOnInit(): void {
    this.meetingObservable = this.meetingService.getMeeting();
  }

  changeMeetingStatus(meetingSatusIdx: number){
    //this.meetingStatusIdx = meetingStatusIdx;
  }

  openViewModal(meetingModel: any, viewMeetingIdx: number){
    this.viewMeetingBool = true;
    this.viewMeetingIdx = viewMeetingIdx;
    this.meetingModel = meetingModel;
  }

  closeViewModal(){
    delete this.viewMeetingIdx;
    delete this.meetingModel;
    this.viewMeetingBool = false;

  }


}
