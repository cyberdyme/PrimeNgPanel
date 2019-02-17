import { Component } from '@angular/core';
import { CarsListDemoComponent } from './cars-list-demo/cars-list-demo.component';
import { DialogService } from 'primeng/primeng';
import { style } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PrimeNgPanel';
  display = false;

  constructor(public dialogService: DialogService) {
  }

  showDialog() {
      this.display = true;
  }

  show() {
    const ref = this.dialogService.open(CarsListDemoComponent, {
        header: 'Choose a Car',
        width: '70%',
        height: '500px',
        contentStyle: {'overflow': 'auto'},
        styleClass: 'dialog-filters'
    });
  }
}
