import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UploadFile, UploadFilter } from 'ng-zorro-antd/upload';

import { NzMessageService } from 'ng-zorro-antd/message';
import { Observable, Observer } from 'rxjs';

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
      // creatorName: [null, [Validators.required]],
      coverPicture: ['A'], //select A value for radio btn group. TBD: use user uploaded picture if user did upload
      creatorEmail: [null, [Validators.email,Validators.required]],
      dateRange: [null, [Validators.required]],
      locationValue: [null, [Validators.required]],
      projectDescription: [null, [Validators.required]],
      skills: [null, [Validators.required]],
      skillsDescription: [null, [Validators.required]],
      charity: [false]
    });

  
  }

//for creator photo
  //  showUploadList = {
  //   showPreviewIcon: true,
  //   showRemoveIcon: true,
  //   hidePreviewIconInNonImage: true
  // };
  // fileList = [
  //   {
  //     uid: -1,
  //     name: 'xxx.png',
  //     status: 'done',
  //     url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
  //   }
  // ];
  // previewImage: string | undefined = '';
  // previewVisible = false;


// handlePreview = (file: UploadFile) => {
//     this.previewImage = file.url || file.thumbUrl;
//     this.previewVisible = true;
//   };



    //this is for table filter dropdown, needs a seperate function to extract from project list
    listOfFilterLocation = [
      {
        value: 'LexisNexis',
        label: 'LexisNexis',
        children: [
          {
            value: 'APAC',
            label: 'APAC',
            children: [
              {
                value: 'Shanghai',
                label: 'Shanghai',
                isLeaf: true
              }
            ]
          },
          {
            value: 'NARS',
            label: 'NARS',
            isLeaf: true
          }
        ]
      },
      {
        value: 'Elsevier',
        label: 'Elsevier',
        children: [
          {
            value: 'NARS',
            label: 'NARS',
            children: [
              {
                value: 'New York',
                label: 'New York',
                isLeaf: true
              }
            ]
          },
          {
            value: 'CEMEA',
            label: 'CEMEA',
            isLeaf: true
          }
        ]
      }
    ]
    locationValue: string[] | null = null;
    selectLocation(values: string[]): void {
      console.log('location:', this.locationValue);
    }


//for project cover photo
 filters: UploadFilter[] = [
    {
      name: 'type',
      fn: (fileList: UploadFile[]) => {
        let filterFiles = fileList.filter(w => ~['image/png'].indexOf(w.type));
        filterFiles = fileList.filter(w => ~['image/png'].indexOf(w.type));
        if (filterFiles.length !== fileList.length) {
          this.message.error('Please upload PNG or JPG file');
          return filterFiles;
        }
        return fileList;
      }
    },
    {
      name: 'async',
      fn: (fileList: UploadFile[]) => {
        return new Observable((observer: Observer<UploadFile[]>) => {
          // doing
          observer.next(fileList);
          observer.complete();
        });
      }
    }
  ];

  fileList: object[] | null = null;
  // fileList = [
  //   {
  //     uid: -1,
  //     name: 'xxx.png',
  //     status: 'done',
  //     url: 'http://www.baidu.com/xxx.png'
  //   }
  // ];

  // tslint:disable-next-line:no-any
  handleChange(info: any): void {
    const fileList = info.fileList;
    // 2. read from response and show file link
    if (info.file.response) {
      info.file.url = info.file.response.url;
    }
    // 3. filter successfully uploaded files according to response from server
    // tslint:disable-next-line:no-any
    this.fileList = fileList.filter((item: any) => {
      if (item.response) {
        return item.response.status === 'success';
      }
      return true;
    });
  }



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
