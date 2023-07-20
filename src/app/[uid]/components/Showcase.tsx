import { Player } from "@/types/Player";
import { StatTable } from "./StatTable";
import { Character } from "@/types/Character";
import CharacterInfo from "./CharacterInfo";
import RelicsList from "./RelicsList";

export default function Showcase({
    player,
    character,
}: {
    player: Player;
    character: Character;
}) {
    return (
        <div className="flex flex-row items-center gap-4 h-[500px]">
            <div className="w-[350px] flex flex-col gap-2 h-full panel">
                <CharacterInfo character={character} />
                <StatTable character={character} />
            </div>
            <div className="panel h-full">
                <RelicsList
                    relics={character.relics}
                    sets={character.relic_sets}
                />
            </div>
        </div>
    );
}
