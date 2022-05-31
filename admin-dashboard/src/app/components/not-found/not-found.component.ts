import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  public errorMessage1:string = "404 error pages";
  public errorMessage2:string = "A 404 page is a landing page that tells your site viewers the requested page is unavailable or, in some cases, doesn't exist.";
  constructor() { }

  ngOnInit(): void {
  }

}
