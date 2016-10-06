import {Component, Input, OnChanges, SimpleChanges} from "@angular/core";
import {Player} from "../player/player";
@Component({
    selector:"stats-display-component",
    templateUrl: "statsDisplay.component.html",
    styles:[require('./statsDisplay.component.css')]
})
export class StatsDisplayComponent implements OnChanges{
    @Input() player: Player;
    public initiative: number;
    public stats: Object[];
    public Math = Math;
    public JSON = JSON;

    ngOnChanges(changes: SimpleChanges): void {
        console.log(this.player);
/*            this.player = changes.player.currentValue;*/
            this.initiative = Math.floor((this.player.attributes[2].abilityScore - 10) / 2);
            this.stats = this.player.attributes.map((d)=>({abbr: d.abbr, mod: Math.floor((d.abilityScore - 10) / 2)}));
    }

    constructor(){
        console.log(this.player)
    }
/*    stats = [
        {abbr:"STR",mod:3},
        {abbr:"DEX",mod:4},
        {abbr:"INT",mod:0},
        {abbr:"WIS",mod:0},
        {abbr:"CHA",mod:0}
        ];*/

    blockStats=[
        {abbr:"AC",mod:16},
        {abbr:"Touch",mod:0},
        {abbr:"Flat-footed",mod:0},
    ];

    CMStats = [
        {abbr:"CMB",mod:0},
        {abbr:"CMD",mod:0},
        {abbr:"Flat-footed",mod:0}
    ];

    savingStats = [
        {abbr:"Fortitude",mod:0},
        {abbr:"Reflex",mod:0},
        {abbr:"Will",mod:0}
    ];
}