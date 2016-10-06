import { Skill } from "../skill/skill";
import {Attribute} from "../attribute/attribute";
export class Player{

    constructor(name: string, realName: string, skills: Skill[]) {
        this.name = name;
        this.realName = realName;
        this.skills = skills;
    }

    name: string;
    realName: string;
    skills: Skill[];
    attributes: Attribute[];
};
