"use client";

import { useState, useEffect } from "react";
import { UserContext } from "./UserContext";
import Showcase from "./Showcase";
import CharacterSelection from "./CharacterSelection";
import { User } from "@/types/User";

export default function Page({ params }: { params: { uid: number } }) {
    const [data, setData] = useState<User>({});
    const [selectedCharacter, setSelectedCharacter] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`/api/${params.uid}`);
            const resJSON = await res.json();
            setData(resJSON);
        };
        fetchData();
    }, []);

    if (Object.keys(data).length == 0) {
        return <div>Loading...</div>;
    } else if ("detail" in data) {
        return (
            <div>
                <span>Invalid UID</span>
            </div>
        );
    }

    const contextValue = {
        data: data,
        selectedCharacter: selectedCharacter,
        setSelectedCharacter: setSelectedCharacter,
    };

    return (
        <UserContext.Provider value={contextValue}>
            <div className="flex m-10 flex-col items-center gap-8">
                <CharacterSelection characters={data.characters} />
                <Showcase
                    player={data.player}
                    character={data.characters[selectedCharacter]}
                />
            </div>
        </UserContext.Provider>
    );
}
