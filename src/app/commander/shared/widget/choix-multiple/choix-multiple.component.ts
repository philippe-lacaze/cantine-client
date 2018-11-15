import {Component, ElementRef, forwardRef, Input, OnInit} from '@angular/core';
import {FocusgroupAccessorBase} from 'zia-composants';
import {NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-choix-multiple',
  templateUrl: './choix-multiple.component.html',
  styleUrls: ['./choix-multiple.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ChoixMultipleComponent),
      multi: true
    }
  ]
})
export class ChoixMultipleComponent extends FocusgroupAccessorBase<string[]> implements OnInit {


  toto: string;

  @Input()
  values: string[];


  set value(liste: string[]) {
    this['innerValue'] = liste;
    this.internalObject = ChoixMultipleComponent.toObject(liste);
  }

  get value() {
    return ChoixMultipleComponent.toList(this.internalObject);
  }

  internalObject = {};

  static toObject(list: string[]): {} | null | undefined {
    if (!list) {
      return list;
    }
    const object = {};
    if (list && list.length > 0) {
      for (let i = 0; i < list.length; i++) {
        object[list[i]] = true;
      }
    }
    return object;
  }

  static toList(object: {}): string[] | any {
    if (!object) {
      return object;
    }
    const list = [];
    if (object) {
      const properties: string[] = Object['entries'](object) as any;
      for (let i = 0; i < properties.length; i++) {
        if (!!properties[i][1]) {
          list.push(properties[i][0]);
        }
      }
    }
    return list;
  }


  constructor(elementRef: ElementRef) {
    super(elementRef);
    this.toto = 'toto';
  }

  ngOnInit() {
  }

  writeValue(value) {
    super.writeValue(value);
    this.internalObject = ChoixMultipleComponent.toObject(value);
  }

  onChange() {
    this.fireValueChanged(this.value);
  }

}
