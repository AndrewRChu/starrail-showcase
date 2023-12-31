import { Property } from "./Property";
import { SubProperty } from "./SubProperty";

export interface Relic {
    id: string;
    name: string;
    set_id: string;
    set_name: string;
    rarity: number;
    level: number;
    icon: string;
    main_affix: Property;
    sub_affix: SubProperty[];
}
