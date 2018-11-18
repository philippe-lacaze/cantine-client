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
import {ImprimerCommandeComponent} from './widget/imprimer-commande/imprimer-commande.component';

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

/**
 * Module partagé utilisé par tous les features modules routés.
 */
@NgModule({
  declarations: [CommandeComponent, ImprimerCommandeComponent],
  imports: importExport,
  exports: [...importExport, CommandeComponent, ImprimerCommandeComponent]
})
export class SharedModule { }
