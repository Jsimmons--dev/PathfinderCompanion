import {Component, OnInit, AfterContentInit, OnChanges, SimpleChanges} from "@angular/core/";
import {PlayerService} from "../player/player.service";
import {Player} from "../player/player";
@Component({
    selector:'home-component',
    providers: [PlayerService],
    template: `
    <abilities-component [player]="player"></abilities-component>    
    <gear-component></gear-component>
    <skills-component [player]="player"></skills-component>
`
})
export class HomeComponent implements OnInit{
    public player: Player;
    public JSON;

    constructor(private _playerService: PlayerService){
        this.JSON = JSON;
    }
    ngOnInit(){
        this.getPlayer("Festivus");
    }

    private getPlayer(name: string): void {
        this._playerService
            .getPlayer(name)
            .subscribe((data)=> this.player = data[0],
            error => console.log(error));
    }
}
