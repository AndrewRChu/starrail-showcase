import { Property } from "./Property";

export interface RelicSet {
    id: string;
    name: string;
    icon: string;
    num: number;
    desc: string;
    properties: Property[];
}
