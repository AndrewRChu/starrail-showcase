import { Path } from "./Path";
import { Stat } from "./Stat";
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
    attributes: Stat[];
    properties: Property[];
}
