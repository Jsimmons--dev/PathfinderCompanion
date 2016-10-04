export class Skill{
    constructor(name: string, untrained: boolean, attrBonus: number, attrBase: string, classSkills: number, ranks: number, racialFeats: number, misc: number, ACPenalty: number) {
        this.name = name;
        this.untrained = untrained;
        this.attrBonus = attrBonus;
        this.attrBase = attrBase;
        this.classSkills = classSkills;
        this.ranks = ranks;
        this.racialFeats = racialFeats;
        this.misc = misc;
        this.ACPenalty = ACPenalty;
    }

    name: string;
    untrained: boolean;
    attrBonus: number;
    attrBase: string;
    classSkills: number;
    ranks: number;
    racialFeats: number;
    misc: number;
    ACPenalty: number;
    getTotalBonus(): number {
        return this.attrBonus +
            this.classSkills +
            this.ranks +
            this.racialFeats +
            this.ACPenalty +
            this.misc;
    }
}