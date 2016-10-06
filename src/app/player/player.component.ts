import {Component, Input} from "@angular/core/src/metadata/directives";
import {PlayerService} from "../player/player.service";
import {Player} from "../player/player";
@Component({
    selector:'player',
    providers: [PlayerService],
    templateUrl: "player.component.html"
})
export class PlayerComponent {
    @Input() player: Player;

    constructor(private _playerService:PlayerService) {

    }
}