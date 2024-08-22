import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faLocation,faUser,faMoneyBillTransfer, faMoneyBills} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-widgets',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './top-widgets.component.html',
  styleUrl: './top-widgets.component.scss',
})
export class TopWidgetsComponent implements OnInit {
 
  faLocation = faLocation;
  faUser = faUser;
  faMoneyBillTransfer = faMoneyBillTransfer;
  faMoneyBills = faMoneyBills
 
 
  constructor() {}

  ngOnInit(): void {}
}
