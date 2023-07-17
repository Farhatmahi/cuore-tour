import { Schema, model } from 'mongoose'
import { ITour } from './tour.interface'

const ImportantInformationsSchema = new Schema({
  whatToBring: [{ type: String }],
  notAllowed: [{ type: String }],
  knowBeforeYouGo: [{ type: String }],
})

const ExperienceSchema = new Schema({
  fullDescription: { type: String, required: true },
  highlights: [{ type: String }],
  importantInformations: [ImportantInformationsSchema],
})

const OverviewSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
})

const tourSchema = new Schema({
  title: { type: String, required: true },
  tags: [{ type: String }],
  images: [{ type: String }],
  shortDescription: { type: String, required: true },
  overview: [OverviewSchema],
  whatsIncluded: [{ type: String }],
  experience: [ExperienceSchema],
})

export const Tour = model<ITour>('Tour', tourSchema)
