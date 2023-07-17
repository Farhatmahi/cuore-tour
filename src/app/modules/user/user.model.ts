import { Schema, model } from 'mongoose'
import { IUser, UserModel } from './user.interface'

const userSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  wishlist: [{ type: Schema.Types.ObjectId, ref: 'Tour' }],
  cart: [{ type: Schema.Types.ObjectId, ref: 'Tour' }],
})

export const User = model<IUser, UserModel>('User', userSchema)