import { Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'
import { UserService } from './user.service'

const createUser = catchAsync(async (req: Request, res: Response) => {
  const { user } = req.body
  const result = await UserService.createUser(user)
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'User added to database',
    data: result,
  })
})

export const UserController = { createUser }
