import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListingsService } from '../listings.service';
import { Listing } from '../types';

@Component({
  selector: 'app-edit-listing-page',
  templateUrl: './edit-listing-page.component.html',
  styleUrls: ['./edit-listing-page.component.scss']
})
export class EditListingPageComponent implements OnInit{
  listing: Listing;

  constructor (
    private route: ActivatedRoute,
    private router: Router,
    private ListingsService: ListingsService,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.ListingsService.getListingById(id)
      .subscribe(listing => this.listing = listing);
  }

  onSubmit({ name, description, price } : { name: any, description: any, price: any }): void {
    this.ListingsService.editListing(this.listing.id, name, description, price)
      .subscribe(() => {
        this.router.navigateByUrl('/my-listings');
      });
  }
}
