import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CartItem } from '../../common/cart-item';
import { CartService } from '../../services/cart.service';
import { CheckoutService } from 'src/app/services/checkout.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  totalQuantity: number = 0;
  checkoutFormGroup: FormGroup;
  creditCardYears: number[] = [];
  creditCardMonths: number[] =[];

  constructor(private formBuilder: FormBuilder,
              private _cartService: CartService,
              private _checkoutService: CheckoutService) { }

  ngOnInit() {
    this.cartDetails();
    const startMonth: number = new Date().getMonth() + 1;
    this._checkoutService.getCreditCardMonths(startMonth).subscribe(
      data => this.creditCardMonths = data
    );
    this._checkoutService.getCreditCardYears().subscribe(
      data => this.creditCardYears = data
    );
    this.checkoutFormGroup = this.formBuilder.group({
      customer: this.formBuilder.group({
        firstName: [''],
        lastName: [''],
        email: ['']
      }),
      shippingAddress: this.formBuilder.group({
        street: [''],
        city: [''],
        state: [''],
        country: [''],
        zipcode: ['']
      }),
      billingAddress: this.formBuilder.group({
        street: [''],
        city: [''],
        state: [''],
        country: [''],
        zipcode: ['']
      }),
      creditCard: this.formBuilder.group({
        cardType: [''],
        nameOnCard: [''],
        cardNumber: [''],
        cvv: [''],
        expirationMonth: [''],
        expirationYear: ['']
      }),
    })
  }

  cartDetails(){
    this.cartItems = this._cartService.cartItems;

    this._cartService.totalPrice.subscribe(
      data => this.totalPrice = data
    );

    this._cartService.totalQuantity.subscribe(
      data => this.totalQuantity = data
    );

    this._cartService.calculateTotalPrice();
  }

  onSubmit() {
    console.log('Purchase the books');
    console.log(this.checkoutFormGroup.get('customer').value);
    console.log("Emial is", this.checkoutFormGroup.get('customer').value.email);
  }

  copyShippingAddressToBillingAddress(event) {

    if (event.target.checked) {
      this.checkoutFormGroup.controls.billingAddress
        .setValue(this.checkoutFormGroup.controls.shippingAddress.value);
    }else {
      this.checkoutFormGroup.controls.billingAddress.reset();
    }
    
  }
}