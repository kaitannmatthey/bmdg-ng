import { Component, OnInit } from '@angular/core';
import { Credit } from 'src/app/model/credit.class';
import { CreditService } from 'src/app/service/credit.service';

@Component({
  selector: 'app-credit-list',
  templateUrl: './credit-list.component.html',
  styleUrls: ['./credit-list.component.css']
})
export class CreditListComponent implements OnInit {
  title: string = "Credits-List";
  credits: Credit[] = [];

  constructor(private creditService: CreditService) { }

  ngOnInit() {
    console.log("Calling credits...")
    this.creditService.list().subscribe(jr => {
      console.log("jr: ", jr);
      this.credits = jr.data as Credit[];
      console.log("credits: ", this.credits);
    });
  }

}
