import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { EditListingPageComponent } from './edit-listing-page/edit-listing-page.component';
import { ListingDetailPageComponent } from './listing-detail-page/listing-detail-page.component';
import { ListingDataFormComponent } from './listing-data-form/listing-data-form.component';
import { ListingPageComponent } from './listing-page/listing-page.component';
import { MyListingPageComponent } from './my-listing-page/my-listing-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NewListingPageComponent } from './new-listing-page/new-listing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactPageComponent,
    EditListingPageComponent,
    ListingDetailPageComponent,
    ListingDataFormComponent,
    ListingPageComponent,
    MyListingPageComponent,
    NavBarComponent,
    NewListingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
