import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { RestService } from './rest.service';
import { User } from './model/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [RestService],
})
export class AppComponent {
    user: User = new User();
    userId;
    userResponse;
    data;
    firstName = '';
    lastName = '';
    email = '';
    userName = '';

    constructor(private http : HttpClient, 
        private restService : RestService){    }


    userData(event : Event){
        this.userId = (<HTMLInputElement>event.target).value;
    }
    
    async getData(){

        this.http.get('http://localhost:8080/users/'+ this.userId).subscribe(
            data => {

                this.userResponse = data;

                console.log(this.userResponse);
                
                this.user.firstName = this.userResponse.result.firstName;
                this.user.lastName = this.userResponse.result.lastName;
                this.user.email = this.userResponse.result.email;
                this.user.username = this.userResponse.result.username;
                
        });
    }

    postData():void{
        this.restService.createUser(this.user).subscribe(
            data => {
                alert("User created successfully.");
            });

        this.user.firstName = null;
        this.user.lastName = null;
        this.user.email = null;
        this.user.userId = null;
        this.user.username = null;

    };
}