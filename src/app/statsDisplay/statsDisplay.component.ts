import {Component} from "@angular/core";
import {FeatsComponent} from "../feats/feats.component";
@Component({
    selector:"stats-display-component",
    templateUrl: "statsDisplay.component.html",
    styles:[require('./statsDisplay.component.css')]
})
export class StatsDisplayComponent{
    stats = [
        {abbr:"STR",mod:3},
        {abbr:"DEX",mod:4},
        {abbr:"INT",mod:0},
        {abbr:"WIS",mod:0},
        {abbr:"CHA",mod:0}
        ];

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

    initiative = 4;
}