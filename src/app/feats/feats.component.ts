import {Component} from "@angular/core";
@Component({
    selector:'feats-component',
    templateUrl:"feats.component.html",
    styles:[require('./feats.component.css')]
})
export class FeatsComponent{
    feats =[{
        name: "Point Blank Shot",
        description: "You get a +1 bonus on attack and damage rolls with ranged weapons at ranges of up to 30 feet",
        link: "http://www.d20pfsrd.com/feats/combat-feats/point-blank-shot-combat---final"
    }
    ];
}