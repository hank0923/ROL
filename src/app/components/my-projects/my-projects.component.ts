import { Component, OnInit } from '@angular/core';
import {Router, NavigationExtras} from '@angular/router';
import { ProjectListService } from '../../services/project-list.service';

import { NgxSpinnerService } from "ngx-spinner";



@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.css']
})
export class MyProjectsComponent implements OnInit {

  constructor(
  	private router: Router,
  	private projectListService: ProjectListService,
  	private spinner: NgxSpinnerService
  	) { }

  	//project created by me
 	listOfData = [];
 	//projects that I had joined
 	listOfJoinedData =[];

  	ngOnInit() {
  		this.setup();
  	}

  	setup(){

  		this.getMyProjects().then( data => {
  			this.listOfData = data;
  			this.abbreviateVolenteers(this.listOfData);
  		})

  		this.getMJoinedProjects().then( data => {
  			this.listOfJoinedData = data;
  			this.abbreviateVolenteers(this.listOfJoinedData);
  			console.log(this.listOfJoinedData)
  		})
  	}

  	//fake promise from services for now
  	async getMyProjects() {
	  	return await this.projectListService.getMyProjects();
	}

	async getMJoinedProjects() {
	  	return await this.projectListService.getJoinedProjects();
	}

	//show only max 3 volenteers in table view
	//if more, show circle with number
	abbreviateVolenteers(data){
		data.map(item=>{
			let moreVolenteerNumber = item.volunteers.length - 3;
			item.moreVolenteerNumber = moreVolenteerNumber;
			return item;
		})
	}

  	
  	//for table location filter
	listOfFilterLocation = [{ text: 'Remote', value: 'Remote' }, { text: 'Shanghai', value: 'Shanghai' },{ text: 'Sydney', value: 'Sydney' }];
 	listOfSearchLocation: string[] = [];

	search(listOfSearchLocation: string[]): void {}

	goToProjectDetail(data){
		this.spinner.show();
		setTimeout(() => {
			this.spinner.hide();
		    this.router.navigate(["/project-detail"],  {
		    	state: { 
		    		data: data,
		    		fromUrl: "/my-projects",
		    		fromPage: "My Projects"
		    	}
		    });
	    }, 1000);
	  }

	 //This is only for DEMO to show what 'Joined projects' table link to detail page will look like
	 goToProjectDetailFake(data){
	 	this.spinner.show();
	 	setTimeout(() => {
	 		this.spinner.hide();
		    this.router.navigate(["/project-detail"],  {
		    	state: { 
		    		data: data,
		    		fromUrl: "/my-projects",
		    		fromPage: "My Projects Demo"
		    	}
		    });
	    }, 1000);
	}

}
