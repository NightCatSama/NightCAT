import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLBoolean,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLNonNull
} from 'graphql'

import ArticleType from '../article/ArticleType'

let TagType = new GraphQLObjectType({
  name: 'Tag',
  description: '标签',
  fields: () => ({
    _id: {
      type: GraphQLID,
      description: 'id'
    },
    name: {
      type: GraphQLString,
      description: '标签名字'
    },
    article: {
      type: new GraphQLList(ArticleType),
      description: '该标签下的文章'
    },
    count: {
      type: GraphQLInt,
      description: '该标签下的文章数量'
    }
  })
})

export default TagType