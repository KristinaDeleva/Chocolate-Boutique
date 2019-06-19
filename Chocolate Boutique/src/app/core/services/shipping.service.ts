import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireObject, AngularFireDatabase } from '@angular/fire/database';
import { Billing } from 'src/app/components/shared/models/billing';

@Injectable({
  providedIn: 'root'
})
export class ShippingService {
  shippings: AngularFireList<Billing>;
  shipping: AngularFireObject<Billing>;
  
  constructor(private db: AngularFireDatabase) { 
    this.getshippings();
  }

  
  createshippings(data: Billing) {
    this.shippings.push(data);
  }

  getshippings() {
    this.shippings = this.db.list("shippings");
    return this.shippings;
  }

  getshippingById(key: string) {
    this.shipping = this.db.object("products/" + key);
    return this.shipping;
  }

  updateshipping(data: Billing) {
    this.shippings.update(data.$key, data);
  }

  deleteshipping(key: string) {
    this.shippings.remove(key);
  }
}
