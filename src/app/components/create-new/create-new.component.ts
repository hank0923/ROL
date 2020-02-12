import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UploadFile } from 'ng-zorro-antd/upload';

import { NzMessageService } from 'ng-zorro-antd/message';

import {Router, NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-create-new',
  templateUrl: './create-new.component.html',
  styleUrls: ['./create-new.component.css']
})
export class CreateNewComponent implements OnInit {

   validateForm: FormGroup;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }


   onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  constructor(
  	private fb: FormBuilder,
  	private router: Router,
  	private message: NzMessageService,
  	) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      projectName: [null, [Validators.required]],
      creatorName: [null, [Validators.required]],
      creatorEmail: [null, [Validators.email,Validators.required]],
      dateRange: [null, [Validators.required]],
      location: [null, [Validators.required]],
      projectDescription: [null, [Validators.required]],
      skills: [null, [Validators.required]],
      skillsDescription: [null, [Validators.required]],
      charity: [false]
    });
  }

//for creator photo
   showUploadList = {
    showPreviewIcon: true,
    showRemoveIcon: true,
    hidePreviewIconInNonImage: true
  };
  fileList = [
    {
      uid: -1,
      name: 'xxx.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    }
  ];
  previewImage: string | undefined = '';
  previewVisible = false;


handlePreview = (file: UploadFile) => {
    this.previewImage = file.url || file.thumbUrl;
    this.previewVisible = true;
  };

//for project cover photo
   coverShowUploadList = {
    showPreviewIcon: true,
    showRemoveIcon: true,
    hidePreviewIconInNonImage: true
  };
  coverFileList = [
    {
      uid: -1,
      name: 'xxx.png',
      status: 'done',
      url: 'https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/3/2017/11/20101821/charity-events.jpg'
    }
  ];
  coverPreviewImage: string | undefined = '';
  coverPreviewVisible = false;


coverHandlePreview = (file: UploadFile) => {
    this.coverPreviewImage = file.url || file.thumbUrl;
    this.coverPreviewVisible = true;
  };


  goToAllProject(){
    this.router.navigate(["/all-projects"] );
  }

    goToMyProject(type){
    	setTimeout(() => {
	      this.message.create(type, 'Project is in review');
	    }, 300);
    	
    	this.router.navigate(["/my-projects"] );
  }

}
