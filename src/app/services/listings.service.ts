import { Injectable } from '@angular/core';
import { Listing } from '../models/listing';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListingsService {
  apartmentIdSubject = new BehaviorSubject<string>('');
  apartmentId$ = this.apartmentIdSubject.asObservable();

  private _featuredListings: Listing[] = [
    {
      id: "featured-123",
      title: "5 Bedroom Apartment",
      location: "Banana Island",
      description: "It is located in the most beautiful part of Lagos",
      imgUrl: [
        "https://www.edenoasisrealty.com/wp-content/uploads/2016/03/Featured-592x444.jpg", 
        "https://installmenthomes.ng/wp-content/uploads/2021/05/WhatsApp-Image-2021-03-23-at-09.42.07.jpeg",
        "https://images.privateproperty.com.ng/large/luxurious-amp-executive-6-bedroom-fully-detached-duplex-50LEWvsQVMzQCTE8JOWL.jpg",
      ],
      price: 1000000,
      dateListed: new Date()
    },
    {
      id: "featured-456",
      title: "4 Bedroom Apartment",
      location: "Ikoyi",
      description: "A place to call home and raise your family",
      imgUrl: [
        "https://i.pinimg.com/736x/aa/05/9c/aa059c230652d65ddb853a87d13a13da.jpg",
        "https://images.ctfassets.net/abyiu1tn7a0f/DEAaBPrpWM1holJEUkAMd/d97147b23387bc6a70f0902e2f939bbc/beautiful-house-in-maitama.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBm9cGSb08hlTW_nLknj0quVDLQTTjZdIuLw&s"
      ],
      price: 1500000,
      dateListed: new Date()
    },
    {
      id: "featured-789",
      title: "6 Bedroom Apartment",
      location: "Ikeja GRA",
      description: "Royalty treatment",
      imgUrl: [
        "https://i.pinimg.com/564x/fa/3d/ae/fa3dae883e81649c8dce6c06759ac330.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMJrVCGb6FqMpatlUBsz_GRJVe3e8GdjDF-w&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUwGgwOGuA7fEuTjfTRgLdF2As567UG94l6w&s"
      ],
      price: 2000000,
      dateListed: new Date()
    }
  ]



  private _allListings: Listing[] = [
    {
      id: "all-123",
      title: "Luxury Apartment",
      location: "Banana Island",
      description: "It is located in the most beautiful part of Lagos",
      imgUrl: ["https://www.edenoasisrealty.com/wp-content/uploads/2016/03/Featured-592x444.jpg"],
      price: 1000000,
      dateListed: new Date()
    },
    {
      id: "all-456",
      title: "Royal Apartment",
      location: "Ikoyi",
      description: "A place for your weekend get-away",
      imgUrl: [],
      price: 1500000,
      dateListed: new Date()
    },
    {
      id: "all-789",
      title: "Studio Apartment",
      location: "Ikeja GRA",
      description: "Royalty tretment",
      imgUrl: [],
      price: 800000,
      dateListed: new Date()
    }
  ]

  get getFeaturedListings() {
    return [...this._featuredListings]
  }

  get getAllListings() {
    return [...this._allListings]
  }


  constructor() { }

  getSingleFeaturedListing(id: any): Listing {
    return {...this._featuredListings.find(l => l.id === id)} as Listing;
  }

  getSingleListing(id: any) {
    return {...this._allListings.find(l => l.id === id)};
  }

  setApartmentId(id: string) {
    this.apartmentIdSubject.next(id);
  }

  getApartmentId(): string {
    return this.apartmentIdSubject.getValue();
  }
}
