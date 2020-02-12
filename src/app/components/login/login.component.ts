
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(
  	private router: Router, 
  	private fb: FormBuilder,
  	private spinner: NgxSpinnerService
  	) {}

  validateForm: FormGroup;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if(this.validateForm.valid){
    	this.login();
    }
  }

  login(){
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
	    this.router.navigate(["/all-projects"]);
    }, 1000);
	}


  ngOnInit(): void {
  	//load pixateImg js file
  	this.loadScript('../assets/js/pixateImg.js');

    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      // remember: [true]
    });
  }

  public loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  } 



}
