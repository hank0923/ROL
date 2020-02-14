import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProjectListService {

  	constructor() { }



  	getProjects() {
  		let listOfData: Array<{ 
			id: number, 
			projectStatus: number, //0:in review, 1: launched, 2: inactive,
			isNew: boolean,
			isCharity: boolean,
			isActive: boolean,
			projectName: string,
			picture: string, 
			creator: string, 
			creatorAvatar: string, 
			creatorTitle: string, 
			creatorContact: string,
			requiredSkillText: string,
			requiredSkill: object,
			createdDate: string, 
			endDate: string,
			location: string,
			projectDescription:string,
			volunteers: object
		}> = [{
	      id: 0,
	      projectStatus: 1,	
	      projectName: 'RELX Rule of Law Project Board',
	      isNew: true,
	      isCharity: true,
	      isActive:true,
	      creator: 'Min Chen',
	      creatorTitle:'VP & CTO - APAC',
		  creatorAvatar:'./assets/min.png',
	      requiredSkill: {
	      	dev: true,
	      	design: true,
	      	pm: true
	      },
	      requiredSkillText: 'We will need every talents for this project! Weclome to apply no matter if you have skills as developer, designer, caontent, or project management. There is a lot to be done :)',
	      picture: './assets/1.jpeg',
	      createdDate:'Feb,1,2020',
	      creatorContact:'info@lexisnexis.com',
	      endDate:'Feb,1,2021',
	      location:'Shanghai',
	      projectDescription: 'Expanding the Rule of Law is our company mission and there are a number of fantastic projects around the world to help people in need.  There are also a lot of employees across RELX that would like to help, but aren’t sure how.  A new Rule of Law Project Board would help connect volunteers with projects to better achieve our company mission and help people!',
	      volunteers: [{
	      	vName:'Min Chen', 
	      	vAvatar: './assets/min.png',
	      	vTitle: 'VP & CTO - APAC'
	      },{
	      	vName:'Jamie Buckley', 
	      	vAvatar: './assets/jamie.png',
	      	vTitle: 'Chief Product Officer'
	      }]
		  	},{
		      id: 1,	
		      projectStatus: 1,	
		      isCharity: true,
		      isActive:true,
		      projectName: 'Lexis Advance offering to Small Law & Bar',
		      picture: './assets/project-picture/1.png',
		      isNew: false,
		       requiredSkill: {
		      	dev: true,
		      	design: true,
		      	pm: true
		      },
		      requiredSkillText: 'We will need every talents for this project! Weclome to apply no matter if you have skills as developer, designer, caontent, or project management. There is a lot to be done :)',
		      creator: 'Jessica Sparkles Glitter Shining Bright',
		      creatorTitle:'Product Mgr I - Int',
		  	  creatorAvatar:'',
		      createdDate:'Jan,15,2020',
		      creatorContact:'info@lexisnexis.com',
		      endDate:'July,15,2020',
		      location:'Sydney',
		      projectDescription: 'Exploring ideas to descrease negative NPS detractor for Small Law & Bar segement.',
		      volunteers: [{
		      	vName:'Hank Liu', 
		      	vAvatar: './assets/hank.png',
		      	vTitle: 'Mgr UX'
		      },{
		      	vName:'Yale Yu', 
		      	vAvatar: './assets/yale.png',
		      	vTitle:'Director Software Engineering'
		      },{
		      	vName:'Chenhui Xiao', 
		      	vAvatar: './assets/chenhui.png',
		      	vTitle: 'UX Designer II'
		      },{
		      	vName:'Min Chen', 
		      	vAvatar: './assets/min.png',
		      	vTitle: 'VP & CTO - APAC'
		      },{
		      	vName:'Jamie Buckley', 
		      	vAvatar: './assets/jamie.png',
		      	vTitle: 'Chief Product Officer'
		      }]
		    },{
		      id: 2,	
		      projectStatus: 1,	
		      isCharity: true,
		      isActive:true,
		      projectName: 'AI & NLP technology exploration',
		       picture: './assets/3.jpg',
		      isNew: false,
		      creator: 'Jamie Buckley',
		      creatorAvatar:'./assets/jamie.png',
		      creatorTitle:'Chief Product Officer',
		       requiredSkill: {
		      	dev: true,
		      	design: true,
		      	pm: false
		      },
		      requiredSkillText: 'We will need every talents for this project! Weclome to apply no matter if you have skills as developer, designer, caontent, or project management. There is a lot to be done :)',
		      createdDate:'Feb,15,2020',
		      creatorContact:'info@lexisnexis.com',
		      endDate:'Aug,15,2020',
		      location:'Remote',
		      projectDescription: 'As AI and NLP technology matures, let us seek out opportunities and explore possibilities on how it can be implemented to improve our existing product.',
		      volunteers: [{
		      	vName:'Yale Yu', 
		      	vAvatar: './assets/yale.png',
		      	vTitle:'Director Software Engineering'
		      }]
		    },{
		      id: 3,	
		      projectStatus: 1,	
		      projectName: 'RELX Rule of Law Project Board',
		       picture: './assets/project-picture/2.png',
		      isNew: true,
		      isActive:true,
		      isCharity: true,
		      creator: 'Min Chen',
	      	  creatorTitle:'VP & CTO - APAC',
		      creatorAvatar:'./assets/min.png',
		      createdDate:'Feb,1,2020',
		      creatorContact:'info@lexisnexis.com',
		       requiredSkill: {
		      	dev: true,
		      	design: true,
		      	pm: true
		      },
		      requiredSkillText: 'We will need every talents for this project! Weclome to apply no matter if you have skills as developer, designer, caontent, or project management. There is a lot to be done :)',
		      endDate:'Feb,1,2021',
		      location:'Shanghai',
		      projectDescription: 'Expanding the Rule of Law is our company mission and there are a number of fantastic projects around the world to help people in need.  There are also a lot of employees across RELX that would like to help, but aren’t sure how.  A new Rule of Law Project Board would help connect volunteers with projects to better achieve our company mission and help people!',
		       volunteers: [{
		      	vName:'Min Chen', 
		      	vAvatar: './assets/min.png',
		      	vTitle: 'VP & CTO - APAC'
		      },{
		      	vName:'Jamie Buckley', 
		      	vAvatar: './assets/jamie.png',
		      	vTitle: 'Chief Product Officer'
		      }]
		  	},{
		      id: 4,	
		      projectStatus: 1,	
		      isCharity: false,
		      isActive:true,
		      projectName: 'Lexis Advance offering to Small Law & Bar',
		       picture: './assets/project-picture/3.jpg',
		      isNew: false,
		     creator: 'Yale Yu',
	      	  creatorTitle:'Director Software Engineering',
		      creatorAvatar:'./assets/yale.png',
		      createdDate:'Jan,15,2020',
		      creatorContact:'info@lexisnexis.com',
		      endDate:'July,15,2020',
		       requiredSkill: {
		      	dev: false,
		      	design: true,
		      	pm: true
		      },
		      requiredSkillText: 'We will need every talents for this project! Weclome to apply no matter if you have skills as developer, designer, caontent, or project management. There is a lot to be done :)',
		      location:'Sydney',
		      projectDescription: 'Exploring ideas to descrease negative NPS detractor for Small Law & Bar segement.',
		     volunteers: [{
		      	vName:'Hank Liu', 
		      	vAvatar: './assets/hank.png',
		      	vTitle: 'Mgr UX'
		      },{
		      	vName:'Yale Yu', 
		      	vAvatar: './assets/yale.png',
		      	vTitle:'Director Software Engineering'
		      },{
		      	vName:'Chenhui Xiao', 
		      	vAvatar: './assets/chenhui.png',
		      	vTitle: 'UX Designer II'
		      }]
		    },{
		      id: 5,	
		      projectStatus: 1,
		      isActive:true,	
		      projectName: 'Lexis Advance offering to Small Law & Bar',
		       picture: './assets/6.jpg',
		      isNew: false,
		      isCharity: false,
		      creator: 'Chenhui Xiao',
		      creatorTitle: 'UX Designer II',
		       requiredSkill: {
		      	dev: false,
		      	design: false,
		      	pm: true
		      },
		      requiredSkillText: 'We will need every talents for this project! Weclome to apply no matter if you have skills as developer, designer, caontent, or project management. There is a lot to be done :)',  
		      creatorContact:'info@lexisnexis.com',
		      creatorAvatar:'./assets/chenhui.png',
		      createdDate:'Jan,15,2020',
		      endDate:'July,18,2020',
		      location:'Sydney',
		      projectDescription: 'Exploring ideas to descrease negative NPS detractor for Small Law & Bar segement.',
		      volunteers: [{
		      	vName:'Hank Liu', 
		      	vAvatar: './assets/hank.png',
		      	vTitle: 'Mgr UX'
		      },{
		      	vName:'Yale Yu', 
		      	vAvatar: './assets/yale.png',
		      	vTitle:'Director Software Engineering'
		      },{
		      	vName:'Chenhui Xiao', 
		      	vAvatar: './assets/chenhui.png',
		      	vTitle: 'UX Designer II'
		      }]
		    },{
		      id:6,	
		      projectStatus: 1,
		      isActive:true,	
		      projectName: 'UX Meets Technology Sharing',
		      picture: './assets/7.jpg',
		      isNew: true,
		      isCharity: false,
		      creator: 'Hank Liu',
		      creatorContact:'info@lexisnexis.com',
		      creatorAvatar:'./assets/hank.png',
		       requiredSkill: {
		      	dev: true,
		      	design: false,
		      	pm: true
		      },
		      requiredSkillText: 'We will need every talents for this project! Weclome to apply no matter if you have skills as developer, designer, caontent, or project management. There is a lot to be done :)',
		      creatorTitle: 'Mgr UX',
		      createdDate:'Jan,15,2020',
		      endDate:'July,15,2020',
		      location:'Sydney',
		      projectDescription: 'Exploring ideas to descrease negative NPS detractor for Small Law & Bar segement.',
		     volunteers: [{
		      	vName:'Yale Yu', 
		      	vAvatar: './assets/yale.png',
		      	vTitle:'Director Software Engineering'
		      },{
		      	vName:'Chenhui Xiao', 
		      	vAvatar: './assets/chenhui.png',
		      	vTitle: 'UX Designer II'
		      }]
		    },{
		      id: 7,	
		      projectStatus: 1,
		      isActive:true,	
		      projectName: 'Privacy and Security Technology Sharing ',
		       picture: './assets/8.jpg',
		      isNew: false,
		      isCharity: false,
		      creator: 'Jessica Wang',
		      creatorContact:'info@lexisnexis.com',
		       requiredSkill: {
		      	dev: true,
		      	design: true,
		      	pm: false
		      },
		      requiredSkillText: 'We will need every talents for this project! Weclome to apply no matter if you have skills as developer, designer, caontent, or project management. There is a lot to be done :)',
		      creatorTitle:'Program Manager',
		      creatorAvatar:'./assets/jessica.png',
		      createdDate:'Jan,15,2020',
		      endDate:'July,15,2020',
		      location:'Sydney',
		      projectDescription: 'Exploring ideas to descrease negative NPS detractor for Small Law & Bar segement.',
		      volunteers: [{
		      	vName:'Hank Liu', 
		      	vAvatar: './assets/hank.png',
		      	vTitle: 'Mgr UX'
		      },{
		      	vName:'Yale Yu', 
		      	vAvatar: './assets/yale.png',
		      	vTitle:'Director Software Engineering'
		      },{
		      	vName:'Chenhui Xiao', 
		      	vAvatar: './assets/chenhui.png',
		      	vTitle: 'UX Designer II'
		      }]
		    },{
		      id: 8,	
		      projectStatus: 1,
		      isActive:true,	
		      projectName: 'Lexis Advance offering to Small Law & Bar',
		      picture: './assets/5.jpg',
		      isNew: false,
		      isCharity: false,
		      creator: 'Chenhui Xiao',
		      creatorAvatar:'./assets/chenhui.png',
		      creatorTitle:'UX Designer II',
		      createdDate:'Jan,15,2020',
		      creatorContact:'info@lexisnexis.com',
		      endDate:'July,15,2020',
		       requiredSkill: {
		      	dev: false,
		      	design: true,
		      	pm: true
		      },
		      requiredSkillText: 'We will need every talents for this project! Weclome to apply no matter if you have skills as developer, designer, caontent, or project management. There is a lot to be done :)',
		      location:'Sydney',
		      projectDescription: 'Exploring ideas to descrease negative NPS detractor for Small Law & Bar segement.',
		     volunteers: [{
		      	vName:'Yale Yu', 
		      	vAvatar: './assets/yale.png',
		      	vTitle:'Director Software Engineering'
		      }]
		}]

	 	return listOfData;
	}

	getMyProjects(){
		let listOfData: Array<{ 
		id: number, 
		projectStatus: number, //0:in review, 1: launched, 2: inactive,
		isNew: boolean,
		isCharity: boolean,
		projectName: string,
		isActive: boolean,
		picture: string, 
		creator: string, 
		creatorAvatar: string, 
		creatorContact: string,
		creatorTitle: string,
		requiredSkillText: string,
		requiredSkill: object,
		createdDate: string, 
		endDate: string,
		location: string,
		projectDescription:string,
		volunteers: object}> = [
		    {
		      id: 0,
		      projectStatus: 0,	
		      projectName: 'RELX Rule of Law Project Board',
		      isNew: true,
		      isActive: true,
		      isCharity: true,
		      creator: 'Min Chen',
		      creatorTitle:'VP & CTO - APAC',
		      creatorAvatar:'./assets/min.png',
		      requiredSkill: {
		      	dev: true,
		      	design: true,
		      	pm: true
		      },
		      requiredSkillText: 'We will need every talents for this project! Weclome to apply no matter if you have skills as developer, designer, caontent, or project management. There is a lot to be done :)',
		      picture: './assets/1.jpeg',
		      createdDate:'Feb,1,2020',
		      creatorContact:'info@lexisnexis.com',
		      endDate:'Feb,1,2021',
		      location:'Shanghai',
		      projectDescription: 'Expanding the Rule of Law is our company mission and there are a number of fantastic projects around the world to help people in need.  There are also a lot of employees across RELX that would like to help, but aren’t sure how.  A new Rule of Law Project Board would help connect volunteers with projects to better achieve our company mission and help people!',
		      volunteers: [{
		      	vName:'Min Chen', 
		      	vAvatar: './assets/min.png',
		      	vTitle: 'VP & CTO - APAC'
		      },{
		      	vName:'Jamie Buckley', 
		      	vAvatar: './assets/jamie.png',
		      	vTitle: 'Chief Product Officer'
		      },{
		      	vName:'Hank Liu', 
		      	vAvatar: './assets/hank.png',
		      	vTitle: 'Mgr UX'
		      },{
		      	vName:'Yale Yu', 
		      	vAvatar: './assets/yale.png',
		      	vTitle:'Director Software Engineering'
		      },{
		      	vName:'Chenhui Xiao', 
		      	vAvatar: './assets/chenhui.png',
		      	vTitle: 'UX Designer II'
		      }]
		  	},{
		      id: 1,	
		      projectStatus: 1,	
		      isCharity: true,
		      projectName: 'Lexis Advance offering to Small Law & Bar',
		      picture: './assets/2.jpg',
		      isActive: true,
		      isNew: false,
		       requiredSkill: {
		      	dev: true,
		      	design: true,
		      	pm: true
		      },
		      requiredSkillText: 'We will need every talents for this project! Weclome to apply no matter if you have skills as developer, designer, caontent, or project management. There is a lot to be done :)',
		      creator: 'Jessica Wang',
		      creatorTitle:'Program Manager',
		      creatorAvatar:'./assets/jessica.png',
		      createdDate:'Jan,15,2020',
		      creatorContact:'info@lexisnexis.com',
		      endDate:'July,15,2020',
		      location:'Sydney',
		      projectDescription: 'Exploring ideas to descrease negative NPS detractor for Small Law & Bar segement.',
		      volunteers: [{
		      	vName:'Hank Liu', 
		      	vAvatar: './assets/hank.png',
		      	vTitle: 'Mgr UX'
		      },{
		      	vName:'Yale Yu', 
		      	vAvatar: './assets/yale.png',
		      	vTitle:'Director Software Engineering'
		      },{
		      	vName:'Chenhui Xiao', 
		      	vAvatar: './assets/chenhui.png',
		      	vTitle: 'UX Designer II'
		      }]
		    },{
		      id:2,	
		      projectStatus: 2,	
		      isActive: false,
		      projectName: 'UX Meets Technology Sharing',
		      picture: './assets/7.jpg',
		      isNew: true,
		      isCharity: false,
		      creator: 'Jessica Wang',
		      creatorContact:'info@lexisnexis.com',
		       creatorTitle:'Program Manager',
		      creatorAvatar:'./assets/jessica.png',
		       requiredSkill: {
		      	dev: true,
		      	design: false,
		      	pm: true
		      },
		      requiredSkillText: 'We will need every talents for this project! Weclome to apply no matter if you have skills as developer, designer, caontent, or project management. There is a lot to be done :)',
		      
		      createdDate:'Jan,15,2020',
		      endDate:'July,15,2020',
		      location:'Sydney',
		      projectDescription: 'Exploring ideas to descrease negative NPS detractor for Small Law & Bar segement.',
		     volunteers: [{
		      	vName:'Chenhui Xiao', 
		      	vAvatar: './assets/chenhui.png',
		      	vTitle: 'UX Designer II'
		      }]
		    }]

		return listOfData;    
	}

	getJoinedProjects(){
		let listOfData: Array<{ 
		id: number, 
		projectStatus: number, //0:in review, 1: launched, 2: inactive,
		isNew: boolean,
		isCharity: boolean,
		projectName: string,
		picture: string, 
		creator: string, 
		creatorAvatar: string, 
		creatorContact: string,
		creatorTitle: string,
		requiredSkillText: string,
		requiredSkill: object,
		createdDate: string, 
		endDate: string,
		location: string,
		projectDescription:string,
		volunteers: object}> = [
	    {
	      id: 0,
	      projectStatus: 1,	
	      projectName: 'RELX Rule of Law Project Board',
	      isNew: true,
	      isCharity: true,
	      creator: 'Min Chen',
	      creatorTitle:'VP & CTO - APAC',
	      creatorAvatar:'./assets/min.png',
	      requiredSkill: {
	      	dev: true,
	      	design: true,
	      	pm: true
	      },
	      requiredSkillText: 'We will need every talents for this project! Weclome to apply no matter if you have skills as developer, designer, caontent, or project management. There is a lot to be done :)',
	      picture: './assets/1.jpeg',
	      createdDate:'Feb,1,2020',
	      creatorContact:'info@lexisnexis.com',
	      endDate:'Feb,1,2021',
	      location:'Shanghai',
	      projectDescription: 'Expanding the Rule of Law is our company mission and there are a number of fantastic projects around the world to help people in need.  There are also a lot of employees across RELX that would like to help, but aren’t sure how.  A new Rule of Law Project Board would help connect volunteers with projects to better achieve our company mission and help people!',
	      volunteers: [{
	      	vName:'Min Chen', 
	      	vAvatar: './assets/min.png',
	      	vTitle: 'VP & CTO - APAC'
	      },{
	      	vName:'Jamie Buckley', 
	      	vAvatar: './assets/jamie.png',
	      	vTitle: 'Chief Product Officer'
	      },{
		      	vName:'Hank Liu', 
		      	vAvatar: './assets/hank.png',
		      	vTitle: 'Mgr UX'
		      },{
		      	vName:'Yale Yu', 
		      	vAvatar: './assets/yale.png',
		      	vTitle:'Director Software Engineering'
		      },{
		      	vName:'Chenhui Xiao', 
		      	vAvatar: './assets/chenhui.png',
		      	vTitle: 'UX Designer II'
		      }]
	  	},]
		return listOfData;    
	}

	getNeedApprovedProjects(){ 
		let listOfData: Array<{ 
		id: number, 
		projectStatus: number, //0:in review, 1: launched, 2: inactive,
		isNew: boolean,
		isCharity: boolean,
		isActive: boolean,
		projectName: string,
		picture: string, 
		creator: string, 
		creatorAvatar: string, 
		creatorContact: string,
		creatorTitle: string,
		requiredSkillText: string,
		requiredSkill: object,
		createdDate: string, 
		endDate: string,
		location: string,
		projectDescription:string,
		volunteers: object}> = [
	    {
	      id: 0,
	      projectStatus: 0,	
	      projectName: 'RELX Rule of Law Project Board',
	      isNew: true,
	      isCharity: true,
	      isActive: true,
	      creator: 'Min Chen',
	      creatorTitle:'VP & CTO - APAC',
	      creatorAvatar:'./assets/min.png',
	      requiredSkill: {
	      	dev: true,
	      	design: true,
	      	pm: true
	      },
	      requiredSkillText: 'We will need every talents for this project! Weclome to apply no matter if you have skills as developer, designer, caontent, or project management. There is a lot to be done :)',
	      picture: './assets/1.jpeg',
	      createdDate:'Feb,1,2020',
	      creatorContact:'info@lexisnexis.com',
	      endDate:'Feb,1,2021',
	      location:'Shanghai',
	      projectDescription: 'Expanding the Rule of Law is our company mission and there are a number of fantastic projects around the world to help people in need.  There are also a lot of employees across RELX that would like to help, but aren’t sure how.  A new Rule of Law Project Board would help connect volunteers with projects to better achieve our company mission and help people!',
	      volunteers: []
	  	},{
	      id: 1,	
	      projectStatus: 0,	
	      isCharity: false,
	      isActive: true,
	      projectName: 'Lexis Advance offering to Small Law & Bar',
	      picture: './assets/2.jpg',
	      isNew: false,
	       requiredSkill: {
	      	dev: true,
	      	design: true,
	      	pm: true
	      },
	      requiredSkillText: 'We will need every talents for this project! Weclome to apply no matter if you have skills as developer, designer, caontent, or project management. There is a lot to be done :)',
	      creator: 'Jessica Wang',
	      creatorTitle:'Program Manager',
	      creatorAvatar:'./assets/jessica.png',
	      createdDate:'Jan,15,2020',
	      creatorContact:'info@lexisnexis.com',
	      endDate:'July,15,2020',
	      location:'Sydney',
	      projectDescription: 'Exploring ideas to descrease negative NPS detractor for Small Law & Bar segement.',
	      volunteers: []
	    },{
	      id:2,	
	      projectStatus: 0,	
	      projectName: 'UX Meets Technology Sharing',
	      picture: './assets/7.jpg',
	      isNew: true,
	      isCharity: false,
	      isActive: false,
	      creator: 'Jessica Wang',
	      creatorTitle:'Program Manager',
	      creatorContact:'info@lexisnexis.com',
	      creatorAvatar:'./assets/jessica.png',
	       requiredSkill: {
	      	dev: true,
	      	design: false,
	      	pm: true
	      },
	      requiredSkillText: 'We will need every talents for this project! Weclome to apply no matter if you have skills as developer, designer, caontent, or project management. There is a lot to be done :)',
	      
	      createdDate:'Jan,15,2020',
	      endDate:'July,15,2020',
	      location:'Sydney',
	      projectDescription: 'Exploring ideas to descrease negative NPS detractor for Small Law & Bar segement.',
	     volunteers: []
	    }]


	    return listOfData;
	}

	getApprovedProjects(){

		let listOfData: Array<{ 
		id: number, 
		projectStatus: number, //0:in review, 1: launched, 2: inactive,
		isNew: boolean,
		isCharity: boolean,
		isActive: boolean,
		projectName: string,
		picture: string, 
		creator: string, 
		creatorAvatar: string, 
		creatorContact: string,
		creatorTitle: string,
		requiredSkillText: string,
		requiredSkill: object,
		createdDate: string, 
		endDate: string,
		location: string,
		projectDescription:string,
		volunteers: object}> = [
	    {
	      id: 0,
	      projectStatus:1,	
	      projectName: 'RELX Rule of Law Project Board',
	      isNew: true,
	      isCharity: true,
	      isActive: true,
	      creator: 'Min Chen',
	      creatorTitle:'VP & CTO - APAC',
	      creatorAvatar:'./assets/min.png',
	      requiredSkill: {
	      	dev: true,
	      	design: true,
	      	pm: true
	      },
	      requiredSkillText: 'We will need every talents for this project! Weclome to apply no matter if you have skills as developer, designer, caontent, or project management. There is a lot to be done :)',
	      picture: './assets/1.jpeg',
	      createdDate:'Feb,1,2020',
	      creatorContact:'info@lexisnexis.com',
	      endDate:'Feb,1,2021',
	      location:'Shanghai',
	      projectDescription: 'Expanding the Rule of Law is our company mission and there are a number of fantastic projects around the world to help people in need.  There are also a lot of employees across RELX that would like to help, but aren’t sure how.  A new Rule of Law Project Board would help connect volunteers with projects to better achieve our company mission and help people!',
	      volunteers: [{
	      	vName:'Hank Liu', 
	      	vAvatar: './assets/hank.png',
	      	vTitle: 'Mgr UX'
	      },{
	      	vName:'Yale Yu', 
	      	vAvatar: './assets/yale.png',
	      	vTitle:'Director Software Engineering'
	      },{
	      	vName:'Chenhui Xiao', 
	      	vAvatar: './assets/chenhui.png',
	      	vTitle: 'UX Designer II'
	      }]
	  	},{
	      id: 1,	
	      projectStatus: 1,	
	      isCharity: true,
	      isActive: true,
	      projectName: 'Lexis Advance offering to Small Law & Bar',
	      picture: './assets/2.jpg',
	      isNew: false,
	       requiredSkill: {
	      	dev: true,
	      	design: true,
	      	pm: true
	      },
	      requiredSkillText: 'We will need every talents for this project! Weclome to apply no matter if you have skills as developer, designer, caontent, or project management. There is a lot to be done :)',
	      creator: 'Jessica Wang',
	      creatorTitle:'Program Manager',
	      creatorAvatar:'./assets/jessica.png',
	      createdDate:'Jan,15,2020',
	      creatorContact:'info@lexisnexis.com',
	      endDate:'July,15,2020',
	      location:'Sydney',
	      projectDescription: 'Exploring ideas to descrease negative NPS detractor for Small Law & Bar segement.',
	      volunteers: [{
	      	vName:'Hank Liu', 
	      	vAvatar: './assets/hank.png',
	      	vTitle: 'Mgr UX'
	      },{
	      	vName:'Yale Yu', 
	      	vAvatar: './assets/yale.png',
	      	vTitle:'Director Software Engineering'
	      },{
	      	vName:'Chenhui Xiao', 
	      	vAvatar: './assets/chenhui.png',
	      	vTitle: 'UX Designer II'
	      }]
	    },{
	      id:2,	
	      projectStatus: 2,	
	      projectName: 'UX Meets Technology Sharing',
	      picture: './assets/7.jpg',
	      isNew: true,
	      isCharity: false,
	      creatorTitle:'Program Manager',
	      isActive: false,
	      creator: 'Jessica Wang',
	      creatorContact:'info@lexisnexis.com',
	      creatorAvatar:'./assets/jessica.png',
	       requiredSkill: {
	      	dev: true,
	      	design: false,
	      	pm: true
	      },
	      requiredSkillText: 'We will need every talents for this project! Weclome to apply no matter if you have skills as developer, designer, caontent, or project management. There is a lot to be done :)',	      
	      createdDate:'Jan,15,2020',
	      endDate:'July,15,2020',
	      location:'Sydney',
	      projectDescription: 'Exploring ideas to descrease negative NPS detractor for Small Law & Bar segement.',
	     volunteers: [{
	      	vName:'Hank Liu', 
	      	vAvatar: './assets/hank.png',
	      	vTitle: 'Mgr UX'
	      },{
	      	vName:'Yale Yu', 
	      	vAvatar: './assets/yale.png',
	      	vTitle:'Director Software Engineering'
	      },{
	      	vName:'Chenhui Xiao', 
	      	vAvatar: './assets/chenhui.png',
	      	vTitle: 'UX Designer II'
	      }]
	    }]

	    return listOfData;
	}

	
}
