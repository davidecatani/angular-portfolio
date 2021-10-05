import { RandomUser } from "./random-user";
import { RandomUsersInfo } from "./random-users-info";

export interface RandomUsers {
    results: RandomUser[];
    info: RandomUsersInfo;
}
