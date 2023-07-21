import { Player } from "@/types/Player";
import { StatTable } from "./StatTable";
import { Character } from "@/types/Character";
import CharacterInfo from "./CharacterInfo";
import RelicsList from "./RelicsList";
import getImage from "../data";

export default function Showcase({
    player,
    character,
}: {
    player: Player;
    character: Character;
}) {
    return (
        <div className="flex flex-row items-center gap-6 h-[500px] panel">
            <div className="w-[350px] flex flex-col gap-2 h-full">
                <CharacterInfo character={character} />
                <StatTable character={character} />
            </div>
            <div className="flex flex-col h-full w-[250px] gap-2">
                <img
                    src={
                        character.light_cone &&
                        getImage(character.light_cone?.portrait)
                    }
                    className="w-[250px] self-center"
                />
                <div>
                    <span>
                        {character.light_cone && character.light_cone.name}
                    </span>
                    <div>
                        <span>Lv. </span>
                        <span className="text-2xl">
                            {character.light_cone && character.light_cone.level}
                        </span>
                        <span className="text-[rgba(255,255,255,0.5)]">
                            {" "}
                            /{" "}
                            {character.light_cone &&
                                character.light_cone.promotion * 10 + 20}
                        </span>
                    </div>
                </div>
            </div>
            <div className="h-full">
                <RelicsList
                    relics={character.relics}
                    sets={character.relic_sets}
                />
            </div>
        </div>
    );
}
