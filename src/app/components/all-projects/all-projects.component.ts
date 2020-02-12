import { Component, OnInit } from '@angular/core';
import {Router, NavigationExtras} from '@angular/router';

import { ProjectListService } from '../../services/project-list.service';
import { NgxSpinnerService } from "ngx-spinner";

import { useAnimation, transition, trigger, style, animate, query, stagger } from '@angular/animations';

// import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.css'],
  animations: [
    trigger('listOfData', [
      transition('* => *', [
        query(':enter', [
          style({opacity: 0, transform: 'translateY(-30px)'}),
          stagger(80, [
            animate('700ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none' }))
          ])
      ])
    ])
   ])
    ]
})
export class AllProjectsComponent implements OnInit {

  constructor(
  	private router: Router,
  	private projectListService: ProjectListService,
    private spinner: NgxSpinnerService
  	) { }

 	listOfData = [];

  	ngOnInit() {
  		this.setup();
  	}

  	setup(){
  		this.getProjects().then( data => {
  			this.listOfData = data;
  			this.abbreviateVolenteers();
  			console.log(data, 'project list');
  		})
  	}

  	//fake promise from service for now
  	async getProjects() {
  	 	// this.projectListService.getProjects().subscribe(data => this.data = data)
	  	return await this.projectListService.getProjects();
	}

	//show only max 3 volenteers in table view
	//if more, show circle with number
	abbreviateVolenteers(){
		this.listOfData.map(item=>{
			let moreVolenteerNumber = item.volunteers.length - 3;
			item.moreVolenteerNumber = moreVolenteerNumber;
			return item;
		})
	}

  	//this is for table filter dropdown, needs a seperate function to extract from project list
  	//it's also used for card view filter dropdown
  	listOfFilterLocation = [{ text: 'Remote', value: 'Remote' }, { text: 'Shanghai', value: 'Shanghai' },{ text: 'Sydney', value: 'Sydney' }];
  	listOfSearchLocation: string[] = [];

  	sortName: string | null = null;
  	sortValue: string | null = null;

  	//sort and search function for table
  	//blank for now
	sort(sortName: string, value: string): void {}
  	search(listOfSearchLocation: string[]): void {}

  	//Change view btns
  	//0: table; 1:card
	radioValue = 1;
	
	//card view sort dropdown variables
  	listOfTagOptions = [];
  	sortedValue;


	goToProjectDetail(data){
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
	    this.router.navigate(["/project-detail"],  {
	    	state: { 
	    		data: data,
	    		fromUrl: "/all-projects",
	    		fromPage: "All Projects"
	    	}
	    });
    }, 1000);
	}

  	//map table expanded row to each row
  	//uses id as key
	mapOfExpandData: { [key: string]: boolean } = {};

  //Load more button
  isLoading_more:boolean = false;
  moreText:string = "Load More";
  moreBtn:string = "primary";

  moreProject(): void {
    this.isLoading_more = true;
    this.moreText = "Loading";
      setTimeout(() => {
        this.isLoading_more = false;
        this.moreBtn = "primary";
        this.moreText = "Load More";
      }, 2000);
  }

}
