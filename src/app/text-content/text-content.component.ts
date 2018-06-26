import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'text-content',
  templateUrl: './text-content.component.html',
  styleUrls: ['./text-content.component.css']
})
export class TextContentComponent implements OnInit {

  @Input() content: string;
  constructor() { }

  ngOnInit() {
  }

}
