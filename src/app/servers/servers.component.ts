import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  // templateUrl: '<app-server><app-server><app-server><app-server>',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowUser: boolean = false;
  serevrCreationStatus: string = "No Server was created!!";
  serverName: string = "";
  constructor() {
    setTimeout(()=>{
      this.allowUser = true;
    },2000);
  }


  ngOnInit(): void {
  }

  onCreateServe() {
    this.serevrCreationStatus = "Server was Created!!";
  }

  onupdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }


}

