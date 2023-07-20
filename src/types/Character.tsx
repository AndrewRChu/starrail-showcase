import { Path } from "./Path";
import { Element } from "./Element";
import { Skill } from "./Skill";
import { Trace } from "./Trace";
import { LightCone } from "./LightCone";
import { Relic } from "./Relic";
import { RelicSet } from "./RelicSet";
import { Attribute } from "./Attribute";
import { Property } from "./Property";

export interface Character {
    id: string;
    name: string;
    rarity: number;
    rank: number;
    level: number;
    promotion: number;
    icon: string;
    preview: string;
    portrait: string;
    rank_icons: string[];
    path?: Path;
    element?: Element;
    skills: Skill[];
    skill_trees: Trace[];
    light_cone?: LightCone;
    relics: Relic[];
    relic_sets: RelicSet[];
    attributes: Attribute[];
    additions: Attribute[];
    properties: Property[];
}
