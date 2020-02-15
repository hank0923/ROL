import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProjectListService {

  	constructor() { }


  	//All project page 
  	//show all launched projects. do not show inactive, in review, rejected projects
  	getProjects() {
  		let listOfData: Array<{ 
			id: number, 
			projectStatus: number, //0:in review, 1: launched, 2: rejected
			isNew: boolean,
			isCharity: boolean,
			isActive: boolean, //To tell if project is active or inactive. do not include this in project status, because active/inactive is a sperate feature
			projectName: string,
			picture: string, //project cover photo
			creator: string, 
			creatorAvatar: string, 
			creatorTitle: string, 
			creatorContact: string,
			requiredSkillText: string,  //this should also change to object since we're using rich text editotr
			requiredSkill: object,
			createdDate: string,  //this should be date object, for now use string for DEMO 
			endDate: string,  //this should be date object, for now use string for DEMO 
			location: string,  //not sure how will the location array will look like, maybe change this to locationID and map location frontend?
			projectDescription:string, //this should be change to object since we are using rich text editor
			volunteers: object,
			rejectComment: string
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
	      	pm: true, content: true,
	      },
	      requiredSkillText: 'We will need every talents for this project! Weclome to apply no matter if you have skills as developer, designer, content, or project management. There is a lot to be done :)',
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
	      },],
	      rejectComment: ''
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
		      	pm: true, content: true,
		      },
		      requiredSkillText: 'We will need every talents for this project! Weclome to apply no matter if you have skills as developer, designer, content, or project management. There is a lot to be done :)',
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
		      }],
		      rejectComment: ''
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
		      requiredSkillText: 'We will need every talents for this project! Weclome to apply no matter if you have skills as developer, designer, content, or project management. There is a lot to be done :)',
		      createdDate:'Feb,15,2020',
		      creatorContact:'info@lexisnexis.com',
		      endDate:'Aug,15,2020',
		      location:'Remote',
		      projectDescription: 'As AI and NLP technology matures, let us seek out opportunities and explore possibilities on how it can be implemented to improve our existing product.',
		      volunteers: [{
		      	vName:'Yale Yu', 
		      	vAvatar: './assets/yale.png',
		      	vTitle:'Director Software Engineering'
		      }],
		      rejectComment: ''
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
		      	pm: true, content: true,
		      },
		      requiredSkillText: 'We will need every talents for this project! Weclome to apply no matter if you have skills as developer, designer, content, or project management. There is a lot to be done :)',
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
		      }],
		      rejectComment: ''
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
		      	pm: true, content: true,
		      },
		      requiredSkillText: 'We will need every talents for this project! Weclome to apply no matter if you have skills as developer, designer, content, or project management. There is a lot to be done :)',
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
		      }],
		      rejectComment: ''
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
		      	pm: true, content: true,
		      },
		      requiredSkillText: 'We will need every talents for this project! Weclome to apply no matter if you have skills as developer, designer, content, or project management. There is a lot to be done :)',  
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
		      }],
		      rejectComment: ''
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
		      	pm: true, content: true,
		      },
		      requiredSkillText: 'We will need every talents for this project! Weclome to apply no matter if you have skills as developer, designer, content, or project management. There is a lot to be done :)',
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
		      }],
		      rejectComment: ''
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
		      requiredSkillText: 'We will need every talents for this project! Weclome to apply no matter if you have skills as developer, designer, content, or project management. There is a lot to be done :)',
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
		      }],
		      rejectComment: ''
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
		      	pm: true, content: true,
		      },
		      requiredSkillText: 'We will need every talents for this project! Weclome to apply no matter if you have skills as developer, designer, content, or project management. There is a lot to be done :)',
		      location:'Sydney',
		      projectDescription: 'Exploring ideas to descrease negative NPS detractor for Small Law & Bar segement.',
		     volunteers: [{
		      	vName:'Yale Yu', 
		      	vAvatar: './assets/yale.png',
		      	vTitle:'Director Software Engineering'
		      }],
		      rejectComment: ''
		}]

	 	return listOfData;
	}

	//My project page > Projects I have created
	//show project created by user, including all statue - inactive, launched, reject, and in review  
	getMyProjects(){
		let listOfData: Array<{ 
		id: number, 
		projectStatus: number, //0:in review, 1: launched, 2: rejected
		isNew: boolean, //not used in any of the pages yet, nice to have
		isCharity: boolean,
		projectName: string,
		isActive: boolean, //To tell if project is active or inactive. do not include this in project status, because active/inactive is a sperate feature
		picture: string, //project cover photo
		creator: string, 
		creatorAvatar: string, 
		creatorContact: string,
		creatorTitle: string,
		requiredSkillText: string,  //this should also change to object since we're using rich text editotr
		requiredSkill: object,
		createdDate: string,  //this should be date object, for now use string for DEMO 
		endDate: string,  //this should be date object, for now use string for DEMO 
		location: string,  //not sure how will the location array will look like, maybe change this to locationID and map location frontend?
		projectDescription:string, //this should be change to object since we are using rich text editor
		volunteers: object,
		rejectComment: string}> = [
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
		      	pm: true, content: true,
		      },
		      requiredSkillText: 'We will need every talents for this project! Weclome to apply no matter if you have skills as developer, designer, content, or project management. There is a lot to be done :)',
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
		      }],
		      rejectComment: ''
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
		      	pm: true, content: true,
		      },
		      requiredSkillText: 'We will need every talents for this project! Weclome to apply no matter if you have skills as developer, designer, content, or project management. There is a lot to be done :)',
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
		      }],
		      rejectComment: ''
		    },{
		      id:2,	
		      projectStatus: 1,	
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
		      	pm: true, content: true,
		      },
		      requiredSkillText: 'We will need every talents for this project! Weclome to apply no matter if you have skills as developer, designer, content, or project management. There is a lot to be done :)',		      
		      createdDate:'Jan,15,2020',
		      endDate:'July,15,2020',
		      location:'Sydney',
		      projectDescription: 'Exploring ideas to descrease negative NPS detractor for Small Law & Bar segement.',
		     volunteers: [{
		      	vName:'Chenhui Xiao', 
		      	vAvatar: './assets/chenhui.png',
		      	vTitle: 'UX Designer II'
		      }],
		      rejectComment: ''
		    },{
		      id:3,	
		      projectStatus: 2,	
		      isActive: true,
		      projectName: 'LA Customer Interview',
		      picture: './assets/6.jpg',
		      isNew: true,
		      isCharity: false,
		      creator: 'Hank Liu',
		      creatorContact:'info@lexisnexis.com',
		      creatorTitle:'UX Mgr',
		      creatorAvatar:'./assets/hank.png',
		       requiredSkill: {
		      	dev: true,
		      	design: false,
		      	pm: false, 
		      	content: false,
		      },
		      requiredSkillText: 'We will need every talents for this project! Weclome to apply no matter if you have skills as developer, designer, content, or project management. There is a lot to be done :)',      
		      createdDate:'Jan,15,2020',
		      endDate:'May,12,2020',
		      location:'Shanghai',
		      projectDescription: 'Go out and interview our customers to know what they think about LA.',
		      volunteers: [],
		      rejectComment: 'Please edit your project to include an initial plan in the project description and submit again.'
		    }]

		return listOfData;    
	}

	//My project page > Projects I have joined
	//show launched projects user have joined.
	getJoinedProjects(){
		let listOfData: Array<{ 
		id: number, 
		projectStatus: number, //0:in review, 1: launched, 2: rejected
		isNew: boolean,
		isCharity: boolean,
		projectName: string,
		picture: string, //project cover photo
		isActive: boolean, //To tell if project is active or inactive. do not include this in project status, because active/inactive is a sperate feature
		creator: string, 
		creatorAvatar: string, 
		creatorContact: string,
		creatorTitle: string,
		requiredSkillText: string,  //this should also change to object since we're using rich text editotr
		requiredSkill: object,
		createdDate: string,  //this should be date object, for now use string for DEMO 
		endDate: string,  //this should be date object, for now use string for DEMO 
		location: string,  //not sure how will the location array will look like, maybe change this to locationID and map location frontend?
		projectDescription:string, //this should be change to object since we are using rich text editor
		volunteers: object,
		rejectComment: string}> = [
	    {
	      id: 0,
	      projectStatus: 1,	
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
	      	pm: true, content: true,
	      },
	      requiredSkillText: 'We will need every talents for this project! Weclome to apply no matter if you have skills as developer, designer, content, or project management. There is a lot to be done :)',
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
		      }],
		      rejectComment: ''
	  	},]
		return listOfData;    
	}

	//Approval List > In Review Projects
	//show all projects in review. Do not show rejected projects.
	getNeedApprovedProjects(){ 
		let listOfData: Array<{ 
		id: number, 
		projectStatus: number, //0:in review, 1: launched, 2: rejected
		isNew: boolean,
		isCharity: boolean,
		isActive: boolean, //To tell if project is active or inactive. do not include this in project status, because active/inactive is a sperate feature
		projectName: string,
		picture: string, //project cover photo
		creator: string, 
		creatorAvatar: string, 
		creatorContact: string,
		creatorTitle: string,
		requiredSkillText: string,  //this should also change to object since we're using rich text editotr
		requiredSkill: object,
		createdDate: string,  //this should be date object, for now use string for DEMO 
		endDate: string,  //this should be date object, for now use string for DEMO 
		location: string,  //not sure how will the location array will look like, maybe change this to locationID and map location frontend?
		projectDescription:string, //this should be change to object since we are using rich text editor
		volunteers: object,
		rejectComment: string}> = [
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
	      	pm: true, content: true,
	      },
	      requiredSkillText: 'We will need every talents for this project! Weclome to apply no matter if you have skills as developer, designer, content, or project management. There is a lot to be done :)',
	      picture: './assets/1.jpeg',
	      createdDate:'Feb,1,2020',
	      creatorContact:'info@lexisnexis.com',
	      endDate:'Feb,1,2021',
	      location:'Shanghai',
	      projectDescription: 'Expanding the Rule of Law is our company mission and there are a number of fantastic projects around the world to help people in need.  There are also a lot of employees across RELX that would like to help, but aren’t sure how.  A new Rule of Law Project Board would help connect volunteers with projects to better achieve our company mission and help people!',
	      volunteers: [],
	      rejectComment: ''
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
	      	pm: true, content: true,
	      },
	      requiredSkillText: 'We will need every talents for this project! Weclome to apply no matter if you have skills as developer, designer, content, or project management. There is a lot to be done :)',
	      creator: 'Jessica Wang',
	      creatorTitle:'Program Manager',
	      creatorAvatar:'./assets/jessica.png',
	      createdDate:'Jan,15,2020',
	      creatorContact:'info@lexisnexis.com',
	      endDate:'July,15,2020',
	      location:'Sydney',
	      projectDescription: 'Exploring ideas to descrease negative NPS detractor for Small Law & Bar segement.',
	      volunteers: [],
	      rejectComment: ''
	    },{
	      id:2,	
	      projectStatus: 0,	
	      projectName: 'UX Meets Technology Sharing',
	      picture: './assets/7.jpg',
	      isNew: true,
	      isCharity: false,
	      isActive: true,
	      creator: 'Jessica Wang',
	      creatorTitle:'Program Manager',
	      creatorContact:'info@lexisnexis.com',
	      creatorAvatar:'./assets/jessica.png',
	       requiredSkill: {
	      	dev: true,
	      	design: false,
	      	pm: true, content: true,
	      },
	      requiredSkillText: 'We will need every talents for this project! Weclome to apply no matter if you have skills as developer, designer, content, or project management. There is a lot to be done :)',	      
	      createdDate:'Jan,15,2020',
	      endDate:'July,15,2020',
	      location:'Sydney',
	      projectDescription: 'Exploring ideas to descrease negative NPS detractor for Small Law & Bar segement.',
	     volunteers: [],
	     rejectComment: ''
	    }]


	    return listOfData;
	}

	//Approval List > Launched Projects
	//show all launched and inactive projects. Do not show rejected projects.
	getApprovedProjects(){

		let listOfData: Array<{ 
		id: number, 
		projectStatus: number, //0:in review, 1: launched, 2: rejected
		isNew: boolean,
		isCharity: boolean,
		isActive: boolean, //To tell if project is active or inactive. do not include this in project status, because active/inactive is a sperate feature
		projectName: string,
		picture: string, //project cover photo
		creator: string, 
		creatorAvatar: string, 
		creatorContact: string,
		creatorTitle: string,
		requiredSkillText: string,  //this should also change to object since we're using rich text editotr
		requiredSkill: object,
		createdDate: string,  //this should be date object, for now use string for DEMO 
		endDate: string,  //this should be date object, for now use string for DEMO 
		location: string,  //not sure how will the location array will look like, maybe change this to locationID and map location frontend?
		projectDescription:string, //this should be change to object since we are using rich text editor
		volunteers: object,
		rejectComment: string}> = [
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
	      	pm: true, content: true,
	      },
	      requiredSkillText: 'We will need every talents for this project! Weclome to apply no matter if you have skills as developer, designer, content, or project management. There is a lot to be done :)',
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
	      }],
	      rejectComment: ''
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
	      	pm: true, content: true,
	      },
	      requiredSkillText: 'We will need every talents for this project! Weclome to apply no matter if you have skills as developer, designer, content, or project management. There is a lot to be done :)',
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
	      }],
	      rejectComment: ''
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
	      	pm: true, content: true,
	      },
	      requiredSkillText: 'We will need every talents for this project! Weclome to apply no matter if you have skills as developer, designer, content, or project management. There is a lot to be done :)',	      
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
	      }],
	      rejectComment: ''
	    }]

	    return listOfData;
	}

	
}
