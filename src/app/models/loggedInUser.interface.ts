import { TheaterData } from "./theater-data.interface"
import { User } from "./user.interface"

export interface LoggedInUser {
    user:User;
    theaterData:TheaterData;
}