import { Component } from '@angular/core';
import {Listing} from '../types';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-listing-page',
  templateUrl: './listing-page.component.html',
  styleUrls: ['./listing-page.component.scss']
})
export class ListingPageComponent {
  listings: Listing[] = [];

  constructor(
    private ListingsService: ListingsService
  ) {}

  ngOnInit():void {
    this.listings = this.ListingsService.getListings();
  }
}
