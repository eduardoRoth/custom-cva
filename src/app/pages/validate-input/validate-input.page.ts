import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  IonCard,
  IonCardHeader,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { checkmarkCircleOutline, closeCircleOutline } from 'ionicons/icons';
import { CustomInputComponent } from '../../components/custom-input/custom-input.component';

@Component({
  selector: 'app-validate-input',
  templateUrl: './validate-input.page.html',
  styleUrls: ['./validate-input.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonCard,
    IonItem,
    IonLabel,
    IonInput,
    IonCardHeader,
    IonIcon,
    CustomInputComponent,
  ],
})
export class ValidateInputPage {
  regexp: string = '^[a-z]*$';
  firstName = new FormControl('');

  constructor() {
    addIcons({
      checkmarkCircleOutline,
      closeCircleOutline,
    });
  }
}
