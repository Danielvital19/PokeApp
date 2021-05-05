import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: any = {
    "Name": "Daniel Vital Sánchez",
    "Tel": "(+52)492-103-07-68",
    "Email" : "danielvitals0@gmail.com",
  }

  constructor() { }

  ngOnInit(): void {
  }

}
