import {Component, ElementRef, forwardRef, Input, OnInit} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {FocusgroupAccessorBase} from 'src/app/shared/widget/focusgroup-accessor-base';

@Component({
  selector: 'app-choix-simple',
  templateUrl: './choix-simple.component.html',
  styleUrls: ['./choix-simple.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ChoixSimpleComponent),
      multi: true
    }
  ]
})
export class ChoixSimpleComponent extends FocusgroupAccessorBase<string> implements OnInit {

  @Input()
  values: string[];

  constructor(elementRef: ElementRef) {
    super(elementRef);
  }

  ngOnInit() {
  }

}
