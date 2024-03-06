import { connection } from '@/utils/axios'

export const fetchPortfolioProjects = async () => {
  const response = await connection.get('/portfolio')
  return response.data
}
