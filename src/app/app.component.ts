import { Component } from '@angular/core';
import { CarsListDemoComponent } from './cars-list-demo/cars-list-demo.component';
import { DialogService } from 'primeng/primeng';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'PrimeNgPanel';

  constructor(public dialogService: DialogService) {
  }
  
  show() {
    const ref = this.dialogService.open(CarsListDemoComponent, {
        header: 'Choose a Car',
        width: '70%'
    });
  }
}
