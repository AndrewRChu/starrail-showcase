import { Relic } from "@/types/Relic";
import { RelicSet } from "@/types/RelicSet";
import RelicInfo from "./RelicInfo";

export default function RelicsList({
    relics,
    sets,
}: {
    relics: Relic[];
    sets: RelicSet[];
}) {
    return (
        <div className="h-full flex flex-row flex-wrap w-[400px] justify-between items-center">
            {relics.map((relic, i) => (
                <RelicInfo relic={relic} key={i} />
            ))}
        </div>
    );
}
