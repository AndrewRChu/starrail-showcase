import { Path } from "./Path";
import { Attribute } from "./Attribute";
import { Property } from "./Property";

export interface LightCone {
    id: string;
    name: string;
    rarity: number;
    rank: number;
    level: number;
    promotion: number;
    icon: string;
    preview: string;
    portrait: string;
    path: Path;
    attributes: Attribute[];
    properties: Property[];
}
