import { Relic } from "@/types/Relic";
import getImage from "../data";

export default function RelicInfo({ relic }: { relic: Relic }) {
    return (
        <div className="flex flex-row gap-4 p-2 w-[200px]">
            <div className="flex flex-col justify-center items-center">
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
                {relic.sub_affix.map((substat) => (
                    <div className="flex flex-row">
                        <img src={getImage(substat.icon)} className="w-8 h-8" />
                        {substat.display}
                    </div>
                ))}
            </div>
        </div>
    );
}
