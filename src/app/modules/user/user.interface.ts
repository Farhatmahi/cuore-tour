import { Model } from "mongoose"
import { ITour } from "../tour/tour.interface"

export interface IUser {
    name : string
    email : string
    password : string
    wishlist? : ITour[]
    cart? : ITour[]   
}

export type UserModel = Model<IUser, Record<string, unknown>>;