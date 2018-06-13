import { Injectable} from '@angular/core'
import { User } from '../model/user';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService
{
    getUserData() {
        return this.http.get("assets/data.json").map(response => <User[]>response.json());
    }

    constructor(private http : Http) {}


}