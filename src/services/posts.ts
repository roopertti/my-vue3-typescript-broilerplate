import { Post } from '@/@types/Post'
import { httpClient } from './httpClient'

export const getPostsByUser = async (userId: number): Promise<Post[]> => {
  const res = await httpClient.get<Post[]>('/posts', { params: { userId } })
  return res.data
}
