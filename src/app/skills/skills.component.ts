import {Component} from "@angular/core";
import {PlayerService} from "../player/player.service";
import {Skill} from "../skill/skill";
@Component({
    selector:"skills-component",
    templateUrl: "skills.component.html",
    styles: [require("./skills.component.css")],
    providers: [PlayerService]
})
export class SkillsComponent{
    skills: Skill[];
    constructor(playerService: PlayerService) {
        this.skills = playerService.getPlayers()[0].skills;
    }

    skillFeatures = ["Name", "Untrained","Skill Bonus","Attr Bonus", "Attr Base",
        "Class Skills", "Ranks", "Racial,Feats", "Misc","AC Penalty"];
}