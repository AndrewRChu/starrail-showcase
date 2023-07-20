import { Character } from "@/types/Character";
import getImage from "../data";

export default function CharacterInfo({ character }: { character: Character }) {
    return (
        <div>
            <div className="flex flex-row justify-between items-center">
                <div>
                    <span className="text-3xl">{character.name}</span>
                    <div>
                        <span>Lv.</span>
                        <span className="text-2xl"> {character.level} </span>
                        <span className="text-[rgba(255,255,255,0.5)]">
                            / {character.promotion * 10 + 20}
                            <span></span>
                        </span>
                    </div>
                </div>
                <div className="h-16 flex flex-row gap-2">
                    <img
                        src={character.path && getImage(character.path.icon)}
                        className="h-full"
                    />
                    <img
                        src={
                            character.element &&
                            getImage(character.element.icon)
                        }
                        className="h-full"
                    />
                </div>
            </div>
        </div>
    );
}
