import { Component, Input, OnInit } from '@angular/core';
import { Hiring } from '@shared/models/hiring';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent implements OnInit {
    @Input() hiring!: Hiring;

  constructor() { }

  ngOnInit() {
  }

}
