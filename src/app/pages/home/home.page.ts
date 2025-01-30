import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonButtons, 
  IonMenuButton,
  IonSegment,
  IonSegmentButton,
  IonSegmentContent,
  IonSegmentView,
  IonGrid,
  IonCard,
  IonCol,
  IonRow,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonText,
  IonButton,
  IonImg,
  IonCardContent,
  ModalController
} from '@ionic/angular/standalone';
import { SegmentChangeEventDetail } from '@ionic/angular';
import { ListingsService } from 'src/app/services/listings.service';
import { Listing } from 'src/app/models/listing';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ViewFeaturedListingComponent } from 'src/app/components/view-featured-listing/view-featured-listing.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar,
    IonButtons, 
    IonMenuButton,
    CommonModule, 
    FormsModule,
    IonSegment,
    IonSegmentButton,
    IonSegmentContent,
    IonSegmentView,
    IonGrid,
    IonCard,
    IonCol,
    IonRow,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonText,
    IonButton,
    IonImg,
    IonCardContent,
    RouterLink, 
    RouterLinkActive
  ],
  providers: []
})
export class HomePage implements OnInit {
  featuredListings: Listing[] = []

  constructor(
    private listingService: ListingsService,
    private modalCtrl: ModalController 
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.featuredListings = this.listingService.getFeaturedListings;
    console.log(this.featuredListings, 'featured');
    
  }

  filterUpdate(event: CustomEvent<SegmentChangeEventDetail>) {
    console.log(event.detail, 'event detail');
    
  }

  async openFeaturedListModal(id: string) {
    this.listingService.setApartmentId(id);
    const modal = await this.modalCtrl.create({
      component: ViewFeaturedListingComponent,
    });
    modal.present();

    // const { data, role } = modal.onWillDismiss();

    // if (role === 'confirm') {
    //   this.message = `Hello, ${data}!`;
    // }
  }

}
