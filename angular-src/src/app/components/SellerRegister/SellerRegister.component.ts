import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './sellerRegister.component.html',
  styleUrls: ['./sellerRegister.component.css']
})
export class SellerRegisterComponent implements OnInit {
  first_name: String;
  last_name: String;
  email: String;
  password: String;

  constructor( private validateService: ValidateService,
              private flashMessage: FlashMessagesService,
              private router: Router,
              private registerService: RegisterService) { }

  ngOnInit() {
  }

  OnSellerRegisterSubmit() {
    const seller = {
      first_name: this.first_name,
      last_name: this.last_name,
      email: this.email,
      password: this.password
    };

    // RequiredFields
    if (!this.validateService.ValidateBuyerRegister(seller)) {
      this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 10000});
      return false;

    }

    // ValidateEmail
    if (!this.validateService.validateEmail(seller.email)) {
      this.flashMessage.show('Invalid Email', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    // Register Buyer
    this.registerService.RegisterSeller(seller).subscribe((data:any) => {
      if (data.success) { 
        this.flashMessage.show('You are now Register', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/sellerLogin']);
      } else {
        this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/SellerRegister']);
      }
    });

  }
}