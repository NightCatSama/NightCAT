import { article, comment } from '../models'
import { getDefaultCover } from '../common/article'

/*  获取全部文章  */
export const getArticle = async(condition) => {
  condition = condition || {}
  return await article.find(condition).populate('author tags').sort({ 'created_at': -1 })
}

/*  根据id查找文章  */
export const getArticleById = async(id) => {
  return await article.findById(id).populate('author tags')
}

/*  生成新文章  */
export const newAndSave = async(data) => {
  let a = new article()
  a.title = data.title
  a.author = data.author
  a.tags = data.tags
  a.content = data.content
  a.cover = data.cover || getDefaultCover()
  a.release = false || data.release
  await a.save()

  return await getArticleById(a._id)
}

export default {
  getArticle,
  getArticleById,
  newAndSave
}
