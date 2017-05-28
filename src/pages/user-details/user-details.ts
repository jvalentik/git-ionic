import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GithubUsersProvider } from '../../providers/github-users/github-users';
import { User } from '../../models/user';

@IonicPage()
@Component({
  selector: 'page-user-details',
  templateUrl: 'user-details.html',
})
export class UserDetailsPage {
  login: string;
  user: User;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private githubService: GithubUsersProvider) {
    this.login = this.navParams.get('login');
    this.githubService
        .getUser(this.login)
        .subscribe(user => this.user = user);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserDetailsPage');
  }

}
