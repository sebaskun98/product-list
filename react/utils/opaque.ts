import { WITHOUT_STOCK } from '../constants/Availability'

export const opaque = (availability?: string | null) =>
  availability && availability === WITHOUT_STOCK ? 'o-70' : ''
