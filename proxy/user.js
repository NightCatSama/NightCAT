import { user } from '../models'
import { getGravatar } from '../common/sign'

/*  获取完整的用户列表  */
export const getUsers = async() => {
  return await user.find({}).sort({ 'superAdmin': -1 }).sort({ 'admin': -1 })
}

/*  根据账号查找用户  */
export const getUserByAccount = async(account) => {
  return await user.findOne({ account })
}

/*  根据邮箱查找用户  */
export const getUserByEmail = async(email) => {
  return await user.findOne({ email })
}

/*  根据access_token查找用户  */
export const getUserByAccessToken = async(access_token) => {
  return await user.findOne({ access_token })
}

/*  根据id查找用户  */
export const getUserById = async(id) => {
  return await user.findById(id)
}

/*  生成新用户  */
export const newAndSave = async(data) => {
  let u = new user()
  u.account = data.account
  u.password = data.password
  u.resetPwd = !!data.resetPwd
  u.subscribe = !!data.subscribe
  u.profile = data.profile
  u.location = data.location
  u.email = data.email
  u.github = data.github
  u.avatar = data.avatar || getGravatar(data.email || '')
  u.access_token = data.access_token
  return await u.save()
}

export default {
  getUsers,
  getUserByAccount,
  getUserByEmail,
  getUserByAccessToken,
  getUserById,
  newAndSave
}
