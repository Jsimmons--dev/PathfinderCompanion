import {Component} from "@angular/core";
@Component({
    selector:'abilities-component',
    templateUrl:'abilities.component.html',
    styles: [require('./abilities.component.css')]
})
export class AbilitiesComponent{
    str = 5;
    modNames =["ATTR","Ability Score","Item Bonus","Ability Modifier",
    "Temp Score", "Temp Modifier"];

    Math = Math;

    abilities = [
        {"abbr":"STR", abilityScore:16, itemBonus:0, tempScore:0,tempModifier:0},
        {"abbr":"DEX", abilityScore:18, itemBonus:0, tempScore:0,tempModifier:0},
        {"abbr":"CON", abilityScore:10, itemBonus:0, tempScore:0,tempModifier:0},
        {"abbr":"INT", abilityScore:10, itemBonus:0, tempScore:0,tempModifier:0},
        {"abbr":"WIS", abilityScore:10, itemBonus:0, tempScore:0,tempModifier:0},
        {"abbr":"CHA", abilityScore:10, itemBonus:0, tempScore:0,tempModifier:0}
        ]
}