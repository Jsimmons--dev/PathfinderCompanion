import {Component, Input} from "@angular/core";
@Component({
    selector:'abilities-component',
    templateUrl:'abilities.component.html',
    styles: [require('./abilities.component.css')]
})
export class AbilitiesComponent{
    @Input() player;
    Math = Math;
    modNames =["ATTR","Ability Score","Item Bonus","Ability Modifier",
    "Temp Score", "Temp Modifier"];
}