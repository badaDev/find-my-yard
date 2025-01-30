import { Component, OnInit } from '@angular/core';
import { 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonButtons, 
  IonGrid,
  IonCol,
  IonRow,
  IonText,
  IonButton,
  IonImg,
  IonIcon,
  ModalController,
  IonContent
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
  closeCircleOutline, closeCircleSharp
 } from "ionicons/icons";
import { Listing } from 'src/app/models/listing';
import { ListingsService } from 'src/app/services/listings.service';

@Component({
  selector: 'app-view-featured-listing',
  templateUrl: './view-featured-listing.component.html',
  styleUrls: ['./view-featured-listing.component.scss'],
  standalone: true,
  imports:[
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    IonButtons, 
    IonGrid,
    IonCol,
    IonRow,
    IonText,
    IonButton,
    IonImg,
    IonIcon,
    IonContent
  ]
})
export class ViewFeaturedListingComponent  implements OnInit {
  apartmentId!: string;
  featuredApartment!: Listing;

  constructor(
    private modalCtrl: ModalController,
    private listingService: ListingsService
  ) { 
    addIcons({ 
      closeCircleSharp,
      closeCircleOutline
    });

    this.listingService.apartmentId$.subscribe((id) => {
      this.apartmentId = id;
      if (this.apartmentId) {
        this.featuredApartment = this.listingService.getSingleFeaturedListing(this.apartmentId);
        console.log(this.featuredApartment, 'single featured apartment');
        
      }
    })
  }

  ngOnInit() {}

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

}
