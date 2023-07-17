import { Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'
import { TourService } from './tour.service'

const createTour = catchAsync(async (req: Request, res: Response) => {
  const { tour } = req.body
  const result = await TourService.createTour(tour)

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Tour created successfully',
    data: result,
  })
})

// const getAllTour = catchAsync(async (req: Request, res: Response) => {
//     const result = await TourService.getAllTour()
// }
export const TourController = { createTour }
