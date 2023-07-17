import bcrypt from 'bcrypt'
import ApiError from '../../../errors/ApiError'
import { IUser } from './user.interface'
import { User } from './user.model'

const createUser = async (user: IUser) => {
  const { email, password } = user

  const existingUser = await User.findOne({ email })
  if (existingUser) {
    throw new ApiError(400, 'User already exists')
  }

  const salt = await bcrypt.genSalt()
  const passwordHash = await bcrypt.hash(password, salt)

  user.password = passwordHash

  const newUser = await User.create(user)
  if (!newUser) {
    throw new ApiError(400, 'Failed to add user to database')
  }

  return newUser
}

export const UserService = { createUser }
