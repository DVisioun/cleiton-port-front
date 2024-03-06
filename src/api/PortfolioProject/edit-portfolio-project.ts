import { Portfolio } from '@/@types/project'
import { connection } from '@/utils/axios'

export const editPortfolioProject = async (
  portfolioProject: Portfolio.CreatePortfolioProjectRequestProps,
  id: string,
) => {
  try {
    const response = await connection.put(`/portfolio/${id}`, {
      name: portfolioProject.name,
      description: portfolioProject.description,
      content: portfolioProject.content,
      image: portfolioProject.image,
      softwares: portfolioProject.softwares,
    })

    return response.data
  } catch (error) {
    console.log(error)
  }
}
