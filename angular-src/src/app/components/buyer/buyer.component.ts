import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css']
})
export class BuyerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

currentTab = 'requests';

requests(currentTab){
  this.currentTab = currentTab;
}

history(currentTab){
  this.currentTab = currentTab;
}

}