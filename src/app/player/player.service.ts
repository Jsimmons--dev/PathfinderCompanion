import {Injectable} from "@angular/core";
import {Player} from "../player/player";
import {Skill} from "../skill/skill";

@Injectable()
export class PlayerService {
    getPlayers(): Player[] {
        return [
            new Player( "Festivus", "Josh Simmons",
        [
            new Skill("Acrobatics", false, 4, "STR", 3, 1, 0, 0, 0),
            new Skill("Climb", false, 3, "DEX", 3, 1, 0, 0, 0),
            new Skill("Perception", false, 0, "WIS", 3, 1, 2, 0, 0),
            new Skill("Stealth", false, 4, "DEX", 3, 1, 0, 0, 0),
            new Skill("Survival", false, 0, "WIS", 3, 1, 0, 0, 0),
            new Skill("Knowledge (Dungeoneering)", false, 0, "INT", 3, 1, 0, 0, 0)
        ])
    ]
    }
}
