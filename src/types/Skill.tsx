import { Element } from "./Element";

export interface Skill {
    id: string;
    name: string;
    level: number;
    max_level: number;
    element: Element;
    type: string;
    type_text: string;
    effect: string;
    effect_text: string;
    simple_desx: string;
    desc: string;
    icon: string;
}
