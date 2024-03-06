import { API } from '@/@types/api'
import { Portfolio } from '@/@types/project'
import { connection } from '@/utils/axios'

export const addPortfolioProject = async (
  portfolioProject: Portfolio.CreatePortfolioProjectRequestProps,
) => {
  try {
    const response = await connection.post('/portfolio', {
      name: portfolioProject.name,
      description: portfolioProject.description,
      content: portfolioProject.content,
      softwares: portfolioProject.softwares,
      image: portfolioProject.image,
    })

    return response.data
  } catch (error) {
    console.log(error)
  }
}
