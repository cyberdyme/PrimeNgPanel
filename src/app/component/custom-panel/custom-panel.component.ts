import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custom-panel',
  templateUrl: './custom-panel.component.html',
  styleUrls: ['./custom-panel.component.scss']
})
export class CustomPanelComponent implements OnInit {
  @Input() backgroundColour: string;
  constructor() { }

  ngOnInit() {
  }

}
