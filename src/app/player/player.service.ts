import {Injectable} from "@angular/core";
import {Http, Response, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';
import { Configuration } from '../app.constants';
import {Player} from "../player/player";

@Injectable()
export class PlayerService {

    private actionUrl: string;
    private headers: Headers;
    private apiBase: string;

    constructor(private _http: Http, private _configuration: Configuration){
        this.actionUrl = _configuration.RESTServer;
        this.apiBase = 'players/';

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept','application/json');
    }
    public getAll =(): Observable<Player[]> => {
        return this._http.get(this.actionUrl+this.apiBase)
            .map((response: Response)=> <Player[]>response.json())
            .catch(this.handleError);
    };

    public getPlayer =(realName:string): Observable<Player> =>{
        return this._http.get(this.actionUrl+this.apiBase + realName)
            .map((response: Response)=> <Player> response.json())
            .catch(this.handleError);
    };
/*        return [
            new Player( "Festivus", "Josh Simmons",
        [
            new Skill("Acrobatics", false, 4, "STR", 3, 1, 0, 0, 0),
            new Skill("Climb", false, 3, "DEX", 3, 1, 0, 0, 0),
            new Skill("Perception", false, 0, "WIS", 3, 1, 2, 0, 0),
            new Skill("Stealth", false, 4, "DEX", 3, 1, 0, 0, 0),
            new Skill("Survival", false, 0, "WIS", 3, 1, 0, 0, 0),
            new Skill("Knowledge (Dungeoneering)", false, 0, "INT", 3, 1, 0, 0, 0)
        ])
    ]*/
    private handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error|| 'Server error');
    }
}
