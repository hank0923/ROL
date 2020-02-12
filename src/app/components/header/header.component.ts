import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { map, filter, mergeMap } from 'rxjs/operators';

import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
  	fb: FormBuilder,
    private spinner: NgxSpinnerService,
    private router: Router, 
    private activatedRoute: ActivatedRoute,
  	) {
    
    this.agreeForm = fb.group({
      cb: [false, Validators.requiredTrue]
    });

    this.visible = false; // set toolbar visible to false

  }

  visible:boolean

  ngOnInit() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map(route => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
      )
      .pipe(
        filter(route => route.outlet === 'primary'),
        mergeMap(route => route.data),
      )
      .subscribe(event => {
        this.showToolbar(event.toolbar); // show the toolbar?
      });
  }

  showToolbar(event) {
    if (event === false) {
      this.visible = false;
    } else if (event === true) {
      this.visible = true;
    } else {
      this.visible = this.visible;
    }
  }


  public agreeForm: FormGroup;


  confirmCreateProject() {
  	this.isVisible = false;
    setTimeout(() => {
      this.router.navigate(["/create-new"]);
    }, 600);
  }

  logout(){
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
      this.router.navigate(["/login"]);
    }, 300);
  }



  isVisible = false;
  isOkLoading = false;

  createProject(){
  	this.isVisible = true;
  }


  handleCancel(): void {
    this.isVisible = false;
  }

  toAllProjects(){
    this.spinner.show();
    setTimeout(() => {
          this.spinner.hide();
          this.router.navigate(["/all-projects"]);
      }, 600);
    }

  toMyProjects(){
    this.spinner.show();
    setTimeout(() => {
          this.spinner.hide();
          this.router.navigate(["/my-projects"]);
      }, 600);
    }

  toApprovalList(){
    this.spinner.show();
    setTimeout(() => {
          this.spinner.hide();
          this.router.navigate(["/approval-list"]);
      }, 600);
    }    





  

}
