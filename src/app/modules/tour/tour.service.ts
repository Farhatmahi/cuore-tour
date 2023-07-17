import ApiError from '../../../errors/ApiError'
import { ITour } from './tour.interface'
import { Tour } from './tour.model'

const createTour = async (tour: ITour) => {
  const { title } = tour
  const existingTour = await Tour.findOne({ title })
  if (existingTour) {
    throw new ApiError(400, 'Tour already exists')
  }

  const newTour = await Tour.create(tour)
  if (!newTour) {
    throw new ApiError(400, 'Failed to add tour to the database')
  }

  return newTour
}

export const TourService = { createTour }
