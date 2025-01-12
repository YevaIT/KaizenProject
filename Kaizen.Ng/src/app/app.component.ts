import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  users : User[] = [];
  title = 'kaizen';

  constructor(private userService : UserService) {}

  ngOnInit(): void {

    this.userService.getAll().subscribe(data => {
      this.users = data;
    });
    //this.users.push({id: 1, email: "email@imail", password: "password"});
  }

  onButtonClick() {
    let user = new User();
    user.id = 0;
    user.email = "email@imail";
    user.password = "password";
    this.userService.add(user).subscribe( data => {
      console.log("User saved");
    });
    
  }
}
