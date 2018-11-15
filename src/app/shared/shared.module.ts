import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatBadgeModule,
  MatButtonModule,
  MatCardModule, MatCheckboxModule, MatDatepickerModule, MatDividerModule, MatError, MatFormFieldModule,
  MatGridListModule,
  MatInputModule, MatListModule,
  MatRadioModule, MatSlideToggleModule, MatSnackBarModule,
  MatStepperModule
} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {CommandeComponent} from './widget/commande/commande.component';
import { MatMomentDateModule, MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';

const importExport = [
  CommonModule,
  HttpClientModule,
  FormsModule,
  ReactiveFormsModule,
  MatFormFieldModule,
  MatIconModule,
  MatRadioModule,
  MatCheckboxModule,
  MatCardModule,
  MatGridListModule,
  MatStepperModule,
  MatDividerModule,
  MatButtonModule,
  MatInputModule,
  MatListModule,
  MatSlideToggleModule,
  MatDatepickerModule,
  MatMomentDateModule,
  MatSnackBarModule,
  MatIconModule,
  MatBadgeModule
]

@NgModule({
  declarations: [CommandeComponent],
  imports: importExport,
  exports: [...importExport, CommandeComponent]
})
export class SharedModule { }
