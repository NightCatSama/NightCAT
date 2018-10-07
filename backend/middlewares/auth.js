/*  判断是否登录  */
export const signinRequire = (req, res, next) => {
	if (!req.session || !req.session.token) {
		return res.status(401)
			.json({
				success: false,
				message: '用户未登录'
			})
	}
	next()
}

/*  未登录跳转到登录页  */
export const userRequired = (req, res, next) => {
	// if (!req.session || !req.session.token) {
	// 	return res.status(302)
	// 		.redirect(`/login?message=${encodeURIComponent('请先登录')}&link=${req.path}`)
	// }
	next()
}

/*  需要管理员权限  */
export const userAdminRequired = (req, res, next) => {
	// if (!req.session || !req.session.token || !req.session.admin) {
	// 	return res.status(302)
	// 		.redirect(`/login?message=${encodeURIComponent('没有管理员权限')}&link=${req.path}`)
	// }
	next()
}

export default {
	userRequired,
	userAdminRequired,
	signinRequire
}