import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-caught',
  templateUrl: './caught.component.html',
  styleUrls: ['./caught.component.scss']
})
export class CaughtComponent implements OnInit {
  @Input() caught: boolean;
  constructor() { }

  ngOnInit() {
  }

}
