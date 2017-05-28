import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { GithubUsersProvider } from '../../providers/github-users/github-users';
import { UserDetailsPage } from '../user-details/user-details';

/**
 * Generated class for the UsersPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {
  users: Array<User>;
  originalUsers: Array<User>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private githubService: GithubUsersProvider) {
    this.githubService
        .load()
        .subscribe((users: Array<User>) => {
          this.users = users;
          this.originalUsers = users;
        });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
  }

  onUserSelected(login: string): void {
    this.navCtrl.push(UserDetailsPage, {login});
  }

  onSearch(searchEvent): void {
    let term = searchEvent.target.value;
    if (term.trim() === '' || term.trim().length < 3) {
      this.users = this.originalUsers;
    } else {
      this.githubService
          .search(term)
          .subscribe(users => {
            this.users = users
          });
    }
  }
}
