import { Skill } from "../skill/skill";
export class Player{

    constructor(name: string, realName: string, skills: Skill[]) {
        this.name = name;
        this.realName = realName;
        this.skills = skills;
    }

    name: string;
    realName: string;
    skills: Skill[];
};
