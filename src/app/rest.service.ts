import { HttpClient , HttpParams, HttpRequest} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './model/user.model';

@Injectable()
export class RestService{

    constructor(private http : HttpClient){}

    baseUrl = 'http://localhost:8080/users'

    public getUserData(userId : any){
       return this.http.get(`${this.baseUrl}/${userId}`);
    }

    public createUser(user){
        return this.http.post<User>(this.baseUrl + '/insert',user);
    }

    printConsole(data : any){
        console.log(data);
    }

}