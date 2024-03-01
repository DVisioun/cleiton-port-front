import { API } from '@/@types/api'
import { connection } from '@/utils/axios'

export const editPortfolioProject = async (
  portfolioProject: API.CreatePortfolioProjectFormProps,
  id: string,
) => {
  try {
    const response = await connection.post(`/portfolio/${id}`, {
      name: portfolioProject.name,
      order: portfolioProject.order,
      flag_home: portfolioProject.flag_home,
      images: portfolioProject.images,
      softwares: portfolioProject.softwares,
    })

    return response.data
  } catch (error) {
    console.log(error)
  }
}
