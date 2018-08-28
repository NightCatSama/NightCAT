import { allowCrossDomain } from '../middlewares/response'
import ctr from '../controllers'
import express from 'express'
import path from 'path'

let router = express.Router()
const { signinByGithub } = ctr.github
const { sendSignupEmail, activeEmail } = ctr.email
const { site } = ctr.site
router
  // .use(allowCrossDomain)  // 开发模式下跨域允许
  .get('/github', signinByGithub) // 账号激活
  .post('/sendSignupEmail', sendSignupEmail) // 发送注册邮件
  .post('/activeEmail', activeEmail) // 通过 email 注册
  .get('*', site) //  跳转页面

export default router