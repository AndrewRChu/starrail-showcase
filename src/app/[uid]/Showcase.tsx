import { Player } from "@/types/Player";
import getImage from "./data";
import { StatTable } from "./StatTable";
import { Character } from "@/types/Character";

export default function Showcase({
    player,
    character,
}: {
    player: Player;
    character: Character;
}) {
    return (
        <div className="flex flex-row items-center gap-4">
            {/* <div className="h-full">
                <div className="absolute flex flex-col">
                    <span>{character.name}</span>
                    <span>{character.level}</span>
                </div>
                <img src={getImage(character.portrait)} className="h-full" />
            </div> */}
            <div className="w-[350px] flex flex-col gap-2 h-full self-start panel">
                <div>
                    <div className="flex flex-row justify-between items-center">
                        <div>
                            <span className="text-3xl">{character.name}</span>
                            <div>
                                <span>Lv.</span>
                                <span className="text-2xl">
                                    {" "}
                                    {character.level}{" "}
                                </span>
                                <span className="text-[rgba(255,255,255,0.5)]">
                                    / {character.promotion * 10 + 20}
                                    <span></span>
                                </span>
                            </div>
                        </div>
                        <div className="h-16 flex flex-row gap-2">
                            <img
                                src={getImage(character.path.icon)}
                                className="h-full"
                            />
                            <img
                                src={getImage(character.element.icon)}
                                className="h-full"
                            />
                        </div>
                    </div>
                </div>
                <StatTable character={character} />
            </div>
        </div>
    );
}
