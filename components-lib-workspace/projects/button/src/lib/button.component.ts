import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ui-button',
  template: `
    <p>
      button works! <button [disabled]="disabled">{{text}}</button>
    </p>
  `,
  styles: [
  ]
})
export class ButtonComponent implements OnInit {
  @Input() text: string;
  @Input() disabled: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
