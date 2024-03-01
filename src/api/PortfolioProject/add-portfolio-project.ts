import { API } from '@/@types/api'
import { connection } from '@/utils/axios'

export const addPortfolioProject = async (
  portfolioProject: API.CreatePortfolioProjectFormProps,
) => {
  try {
    const response = await connection.post('/blog', {
      name: portfolioProject.name,
      order: portfolioProject.order,
      flag_home: portfolioProject.flag_home,
      softwares: portfolioProject.softwares,
      images: portfolioProject.images,
    })

    return response.data
  } catch (error) {
    console.log(error)
  }
}
