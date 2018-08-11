import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import {GitUsersApiService} from "../../services/git-users-api.service";

@Component({
  selector: 'app-users-search-input',
  templateUrl: './users-search-input.component.html',
  styleUrls: ['./users-search-input.component.scss']
})
export class UsersSearchInputComponent implements OnInit {

  public exampleLinks: Array<string>;
  public searchUsersForm: FormGroup;
  public messageBoxVisibility: boolean;
  public formErrors = {
    'searchLoginString': '',
  };

  public validationMessages = {
    'searchLoginString': {
      'required': 'Login is required.',
      'minlength': 'Input at least 4 symbols.',
      'maxlength': 'Input not much then 80 symbols.'
    }
  };

  constructor( private gitUsersApiService: GitUsersApiService, private fb: FormBuilder ) { }

  ngOnInit() {
    this.exampleLinks = [
      'eric',
      'pavel'
    ];
    this.buildForm();
  }

  buildForm() {
    this.searchUsersForm = this.fb.group({
      'searchLoginString': ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(80)
      ]],
    });

    this.searchUsersForm.valueChanges
        .subscribe(data => this.onValueChange(data));
  }

  onValueChange(data?: any) {
    if (!this.searchUsersForm) { return; }

    this.messageBoxVisibility = false;
    const form = this.searchUsersForm;

    for (let field in this.formErrors) {

      this.formErrors[field] = '';
      let control = form.get(field);

      if (control && control.dirty && !control.valid) {
        let message = this.validationMessages[field];

        for (let key in control.errors) {
          this.formErrors[field] += message[key] + ' ';
        }
      }
    }
  }

  public getApiData() {
    if ( !this.searchUsersForm.valid ) {
      this.messageBoxVisibility = true;
      return;
    }
    this.gitUsersApiService
        .getUsersDataBunch( this.searchUsersForm.get('searchLoginString').value, 10 );
  }

  public putTestLogin(link: string): void {
    this.searchUsersForm.get('searchLoginString').setValue(link);
  }


}
