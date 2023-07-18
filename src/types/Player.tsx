import { Avatar } from "./Avatar";
import { SpaceInfo } from "./SpaceInfo";

export interface Player {
    uid: string;
    nickname: string;
    level: number;
    world_level: number;
    friend_count: number;
    avatar: Avatar;
    signature: string;
    is_display: boolean;
    space_info: SpaceInfo;
}
