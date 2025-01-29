import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonButton, IonImg, IonText } from '@ionic/angular/standalone';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
  standalone: true,
  imports: [
    IonContent,  
    IonImg,
    IonButton,
    IonText,
    CommonModule, 
    FormsModule,
    RouterLink,
    RouterLinkActive
  ]
})
export class AuthPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
