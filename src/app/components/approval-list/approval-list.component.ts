import { Component, OnInit } from '@angular/core';
import {Router, NavigationExtras} from '@angular/router';

import { ProjectListService } from '../../services/project-list.service';

import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-approval-list',
  templateUrl: './approval-list.component.html',
  styleUrls: ['./approval-list.component.css']
})
export class ApprovalListComponent implements OnInit {

  constructor(
  	private router: Router,
  	private projectListService: ProjectListService,
  	private spinner: NgxSpinnerService
  	) { }

	//project that needs to be approved
 	listOfData = [];
 	//projects that already has been approved
 	listOfApprovedData =[];

  	ngOnInit() {
  		this.setup();
  	}

  	setup(){

  		this.getNeedApprovedProjects().then( data => {
  			this.listOfData = data;
  		})

  		this.getApprovedProjects().then( data => {
  			this.listOfApprovedData = data;
  		})

  	}

  	//fake promise from services for now
  	async getNeedApprovedProjects() {
	  	return await this.projectListService.getNeedApprovedProjects();
	}

	async getApprovedProjects() {
	  	return await this.projectListService.getApprovedProjects();
	}

	//for table sort and filter
	listOfFilterLocation = [{ text: 'Remote', value: 'Remote' }, { text: 'Shanghai', value: 'Shanghai' },{ text: 'Sydney', value: 'Sydney' }];
 	listOfSearchLocation: string[] = [];

 	listOfFilterStatus = [{ text: 'Launched', value: 'Launched' }, { text: 'Inactive', value: 'Inactive' }];
 	listOfSearchStatus: string[] = [];

	search(list: string[]): void {}

	goToProjectDetail(data){
		this.spinner.show();
		setTimeout(() => {
	      	this.spinner.hide();
		    this.router.navigate(["/project-detail"],  {
		    	state: { 
		    		data: data,
		    		fromUrl: "/approval-list",
		    		fromPage: "Approval List"
		    	}
		    });
		}, 1000);
	  }

}
