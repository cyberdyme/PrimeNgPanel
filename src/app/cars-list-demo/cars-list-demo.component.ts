import { Component, OnInit } from '@angular/core';
import { GenerateNamesService } from '../services/generate-names.service';

@Component({
  selector: 'app-cars-list-demo',
  templateUrl: './cars-list-demo.component.html',
  styleUrls: ['./cars-list-demo.component.scss']
})
export class CarsListDemoComponent implements OnInit {
  filteredCustomers: any[];
  customer: any;

  constructor(private dataService: GenerateNamesService) { }

  ngOnInit() {
  }

  processKeys($event) {
    console.log(this.customer);
  }

  queryCustomers(event) {
    const query = event.query;
    this.dataService.getData(query).toPromise().then(x => {
        this.filteredCustomers = x;
    });
  }
}
