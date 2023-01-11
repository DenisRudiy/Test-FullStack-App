import { fakeListings } from "./fake-data";

export const getAllListingRoute = {
    method: 'GET',
    path: '/api/listing',
    handler: (req, h) => {
        return fakeListings;
    }
}