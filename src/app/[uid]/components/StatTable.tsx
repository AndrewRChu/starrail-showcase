import { Character } from "@/types/Character";
import getImage from "../data";
import { Attribute } from "@/types/Attribute";

export function StatTable({ character }: { character: Character }) {
    return (
        <div className="flex flex-col">
            <StatRow type="hp" />
            <StatRow type="atk" />
            <StatRow type="def" />
            <StatRow type="spd" />
            <StatRow type="crit_rate" />
            <StatRow type="crit_dmg" />
            <StatRow type="break_dmg" />
            <StatRow type="heal_rate" />
            <StatRow type="sp_rate" add100 />
            <StatRow type="effect_hit" />
            <StatRow type="effect_res" />
            <StatRow
                type={`${
                    character.element && character.element.id.toLowerCase()
                }_dmg`}
            />
            <StatRow type="all_dmg" />
        </div>
    );

    function findStat(stat: string) {
        let attribute = character.attributes.find(
            (attribute) => attribute.field == stat
        );
        let addition = character.additions.find(
            (addition) => addition.field == stat
        );

        let defaultValue = {
            field: "",
            name: "",
            icon: "",
            value: 0,
            display: "0",
            percent: false,
        };

        if (!attribute) {
            attribute = defaultValue;
        }
        if (!addition) {
            addition = defaultValue;
        }

        return {
            name: attribute.name || addition.name,
            icon: attribute.icon || addition.icon,
            value: attribute.value + addition.value,
            display:
                parseFloat(attribute.display) + parseFloat(addition.display),
            percent: attribute.percent || addition.percent,
        };
    }

    function StatRow({
        type,
        add100 = false,
    }: {
        type: string;
        add100?: boolean;
    }) {
        let stat = findStat(type);

        if (stat.name == "") return <></>;
        return (
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row gap-1 items-center">
                    <img src={getImage(stat.icon)} className="h-6" />
                    <span>{stat.name}</span>
                </div>
                <span title={stat.value.toString()}>
                    {stat.display + (add100 ? 100 : 0)}
                    {stat.percent ? "%" : ""}
                </span>
            </div>
        );
    }
}
