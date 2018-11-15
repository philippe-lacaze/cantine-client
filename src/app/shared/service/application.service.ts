import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  title = 'La sandwich';
  subtitle = '&ria!';
  nomPrenom: string;

  constructor() { }
}
