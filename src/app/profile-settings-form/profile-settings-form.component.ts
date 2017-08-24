import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-profile-settings-form',
  templateUrl: './profile-settings-form.component.html',
  styleUrls: ['./profile-settings-form.component.css']
})
export class ProfileSettingsFormComponent implements OnInit {
  // createForm: any;
  post: any;
  settingsForm: FormGroup;
  description: string = '';
  title: string = '';
  movieType: ['Action','Adventure','Comedy'];

  constructor(private fb: FormBuilder) { // <--- inject FormBuilder
    this.createForm();

  }

  createForm() {
    this.settingsForm = this.fb.group({
      'title': ['', Validators.required],
      'description': ['',Validators.required]
    });

  }
   addPost(post) {
     this.description = post.description;
     this.title= post.title;

    }




  ngOnInit() {
  //  this.settingsForm = new Form

  }

}







