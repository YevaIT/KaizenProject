import {HttpClient} from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../models/user";

export class UserService 
{
    constructor(private client : HttpClient) {}

    getAll() : Observable<User[]> {
        return this.client.get<User[]>("/api/user")
    }
}