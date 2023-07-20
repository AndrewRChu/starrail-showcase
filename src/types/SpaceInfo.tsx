import { ChallengeData } from "./ChallengeData";

export interface SpaceInfo {
    challenge_data?: ChallengeData;
    pass_area_progress: number;
    light_cone_count: number;
    avatar_count: number;
    achievement_count: number;
}
