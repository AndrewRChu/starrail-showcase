import { Player } from "./Player";
import { Character } from "./Character";

export interface User {
    player: Player;
    characters: Character[];
}
