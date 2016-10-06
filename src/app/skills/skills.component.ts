import {Component, OnChanges} from "@angular/core";
import {PlayerService} from "../player/player.service";
import {Player} from "../player/player";
import {Input} from "@angular/core/src/metadata/directives";
@Component({
    selector:"skills-component",
    templateUrl: "skills.component.html",
    styles: [require("./skills.component.css")],
    providers: [PlayerService]
})
export class SkillsComponent {
    JSON;
    public skillNames: string[] = ["","untrained", "Skill Bonus", "Attr Bonus", "Attr Base", "Class Skill", "Ranks", "Racial, Feats", "Misc", "AC Penalty"];
    constructor(){
        this.JSON = JSON;
    }
    @Input() player: Player;



}