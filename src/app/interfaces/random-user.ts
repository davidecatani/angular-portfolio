import { RandomUserLocation } from "./random-user-location";
import { RandomUserName } from "./random-user-name";

export interface RandomUser {
    gender: string;
    name: RandomUserName;
    location: RandomUserLocation;
    email: string;
    login: RandomUserLogin;
    dob: RandomUserDate;
    registered: RandomUserDate;
    phone: string;
    cell: string;
    id: RandomUserId;
    picture: RandomUserPicture;
    nat: string;
}

export interface RandomUserLogin {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
}

export interface RandomUserDate {
    date: string;
    age: number
}

export interface RandomUserId {
    value: string;
    name: string;
}

export interface RandomUserPicture {
    large: string;
    medium: string;
    thumbnail: string;
}