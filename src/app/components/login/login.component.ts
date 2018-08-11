import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import { GitUsersApiService } from "../../services/git-users-api.service";
import {UserProfileItem} from "../../models/user-profile-item";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public userProfile: UserProfileItem;
  constructor( private activatedRoute: ActivatedRoute, private gitUsersApiService: GitUsersApiService ) {}

  ngOnInit() {
    this.activatedRoute.params.forEach((params: Params) => {
      let login = params["login"]; // конвертируем значение параметра id в тип number
      this.gitUsersApiService.getUserData(login).then((data) => {
        this.userProfile = data
        console.log(this.userProfile);
      });
    });
  }

}
