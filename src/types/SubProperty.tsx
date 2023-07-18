import { Property } from "./Property";

export interface SubProperty extends Property {
    count: number;
    step: number;
}
