import { Component, OnInit } from '@angular/core';
import { UserProfileItem } from "../../models/user-profile-item";
import { GitUsersApiService } from "../../services/git-users-api.service";

@Component({
  selector: 'app-users-search-output',
  templateUrl: './users-search-output.component.html',
  styleUrls: ['./users-search-output.component.scss']
})
export class UsersSearchOutputComponent implements OnInit {

  public usersCollection: Array<UserProfileItem>;
  public usersTotalAmount: number;
  constructor( private gitUsersApiService: GitUsersApiService ) { }

  ngOnInit() {
    this.gitUsersApiService.$usersSubscription.subscribe(
        item => {
          this.usersTotalAmount = item.total_amount;
          this.usersCollection = item.items;
        }
    );
  }


}
