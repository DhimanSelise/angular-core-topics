import { Component, OnInit, DoCheck, OnDestroy, OnChanges} from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit,OnDestroy{

  myReactiveForm: FormGroup | any;
  constructor() {
    console.log('Contructor called');
  }

  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
      'username': new FormControl('My user name'),
      'email': new FormControl('', Validators.required) , 
      'skills': new FormArray([
        new FormControl('')
      ])
    });
  }

  onSubmit() {
    console.log(this.myReactiveForm.value);
    
  }

  addSkill() {
    console.log('Skill Added'); 
    (<FormArray>this.myReactiveForm.get('skills')).push(
      new FormControl(null)
    )
  }

  removeSkill(idx: number) {
    (<FormArray>this.myReactiveForm.get('skills')).removeAt(idx);
  }

  ngOnDestroy(): void {
    console.log('on Destroy called');
  }



  

}
