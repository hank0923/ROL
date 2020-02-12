import { Component, OnInit } from '@angular/core';
import {Router, NavigationExtras} from '@angular/router';

import { NzMessageService } from 'ng-zorro-antd/message';

import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  constructor(
    private router: Router,
    private message: NzMessageService,
    private spinner: NgxSpinnerService
    ) {
    this.data = this.router.getCurrentNavigation().extras.state.data;
    this.fromUrl = this.router.getCurrentNavigation().extras.state.fromUrl;
  	this.fromPage = this.router.getCurrentNavigation().extras.state.fromPage;
  }

  data:any;
  fromUrl:string;
  fromPage:string;

  ngOnInit() {
  	console.log(this.data,this.fromUrl,this.fromPage, 'data');
    this.setup();
  }

  setup(): void {
    this.checkIsCreator();
    this.checkIsActivate();
    this.calculatePercentage();
    this.checkCanApprove();
  }

  isLoading:boolean = false;
  joinedText:string = "Join Project";
  joinedBtn:string = "primary";
  joined:boolean = false;

  joinProject(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.joined = true;
      this.joinedBtn = "dashed";
      this.joinedText = "You are a volunteer";
       this.message.create('success', "You've joined the project!");
    }, 2000);
  }

   leaveProject(): void {
      this.joined = false;
      this.joinedBtn = "primary";
      this.joinedText = "Join Project";
      this.message.info("You've left the project.");
  }

  isLoading_active:boolean = false;
  activeText:string = "Inactivate";
  activeBtn:string = "dashed";

  activeProject(): void {
    this.isLoading_active = true;
    if(this.data.isActive){
      setTimeout(() => {
        this.isLoading_active = false;
        this.data.isActive = false;
        this.activeBtn = "primary";
        this.activeText = "Activate Project";
         this.message.info("The project is now inactivated.");
      }, 2000);
    }else{
      this.isLoading_active = false;
      this.data.isActive = true;
      this.activeBtn = "dashed";
      this.activeText = "Inactivate Project";
      this.message.create("success", "You've activated the project.");
    } 
  }

   checkIsActivate(): void {
    //fake function to  check if  project is activate for btn toggle;
    if(this.data.isActive){
      this.activeBtn = "dashed";
      this.activeText = "Inactivate";

    }else{
      this.activeBtn = "primary";
        this.activeText = "Activate Project";
    } 
  }

  isCreator: boolean;
  checkIsCreator(): void {
    //fake function to  check if is Creator of the project;
      if(this.fromPage === "My Projects"){
         this.isCreator = true;
      }else{
         this.isCreator = false;
      }

      if(this.fromPage === "My Projects Demo"){
        this.joined = true;
         this.isCreator = false;
      this.joinedBtn = "dashed";
      this.joinedText = "You are a volunteer";
      }
  }

  canApprove: boolean;
  checkCanApprove(): void {
    //fake function to  check if can approve project;
      if(this.fromPage === "Approval List"){
         this.canApprove = true;
      }else{
         this.canApprove = false;
      }
  }


  Difference_In_Days;
  Difference_In_Day_Percentage;
  percentageFormat = (percent: number) => this.Difference_In_Days + ' Days Left';
  calculatePercentage():void{
    let date1 = new Date(this.data.createdDate); 
    let date2 = new Date(this.data.endDate); 
    let dateNow = new Date(); 

    let Difference_In_Time = date2.getTime() - date1.getTime();
    let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 

    let Difference_In_Time_Now =  date2.getTime() - dateNow.getTime();
    let Difference_In_Days_Now = Difference_In_Time_Now / (1000 * 3600 * 24); 

    this.Difference_In_Day_Percentage = Math.round((Difference_In_Days - Difference_In_Days_Now) *100 / Difference_In_Days);
    this.Difference_In_Days = Math.round(Difference_In_Days_Now);

    console.log(this.Difference_In_Day_Percentage, this.Difference_In_Days);
  }

   toEditPage(){
     this.spinner.show();
     setTimeout(() => {
      this.spinner.hide();
      this.router.navigate(["/create-new"],  {
        state: { 
          data: this.data
        }
      });
     }, 1000);
  }

  rejectProject(){
    this.spinner.show();
   
    setTimeout(() => {
      this.spinner.hide();
         this.router.navigate(["/approval-list"]);
         this.message.info("Project rejected.");
      }, 1000);
  }

  approveProject(){
    this.spinner.show();
    
    setTimeout(() => {
      this.spinner.hide();
      this.router.navigate(["/approval-list"]);
         this.message.create("success","Project approved.");
      }, 1000);
  }


}
