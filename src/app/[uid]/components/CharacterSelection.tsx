import { useContext } from "react";
import { UserContext } from "../UserContext";
import getImage from "../data";
import { Character } from "@/types/Character";

export default function CharacterSelection({
    characters,
}: {
    characters: Character[];
}) {
    const { selectedCharacter, setSelectedCharacter } =
        useContext<any>(UserContext);

    return (
        <div className="flex flex-row gap-8">
            {characters.map((character, i) => (
                <button
                    onClick={() => setSelectedCharacter(i)}
                    className={`w-20 h-20 overflow-clip rounded-full select-none hover:brightness-125 bg-black transition-transform ${
                        character.rarity == 5
                            ? "shadow-[-10px_0px_5px_rgb(226,171,89)]"
                            : "shadow-[-10px_0px_5px_rgb(114,66,178)]"
                    } ${selectedCharacter == i ? "scale-125" : ""}`}
                    key={i}
                >
                    <img src={getImage(character.icon)} alt={character.name} />
                </button>
            ))}
        </div>
    );
}
