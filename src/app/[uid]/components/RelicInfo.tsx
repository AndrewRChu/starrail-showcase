import { Relic } from "@/types/Relic";
import getImage from "../data";

export default function RelicInfo({ relic }: { relic: Relic }) {
    return (
        <div className="flex flex-row gap-4 w-[200px]">
            <div className="flex flex-col justify-center items-center">
                <span
                    className={`text-sm ${
                        relic.rarity == 5
                            ? "text-[rgb(226,171,89)]"
                            : relic.rarity == 4
                            ? "text-[rgb(114,66,178)]"
                            : "text-[rgb(69,111,226)]"
                    }`}
                >
                    +{relic.level}
                </span>
                <img src={getImage(relic.icon)} className="w-20 h-20" />
                <div className="flex flex-row w-20 items-center justify-center">
                    <img
                        src={
                            relic.main_affix && getImage(relic.main_affix.icon)
                        }
                        className="w-8 h-8"
                    />
                    <span>{relic.main_affix && relic.main_affix.display}</span>
                </div>
            </div>
            <div className="flex flex-col">
                {relic.sub_affix.map((substat, i) => (
                    <div className="flex flex-row justify-between" key={i}>
                        <img src={getImage(substat.icon)} className="w-8 h-8" />
                        {substat.display}
                    </div>
                ))}
            </div>
        </div>
    );
}
