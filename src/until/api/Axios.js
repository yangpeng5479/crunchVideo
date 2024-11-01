import axios from 'axios'
const base_url ='https://crunch-api.dev.catgpt.chat'
const request = (url) => {
	const urls = base_url+url.url;
	const token = 'sk-Dbsb7XBuzCygF6KlT7e8Or5V5fBipKvXfTIG8bMvshj2nq1a';
	// const token = sessionStorage.getItem('token');
	const headers = {
		'content-type': 'application/json'
	}
	return new Promise((resolve,) => {
		axios({
			method: url.method,
			url: urls,
			data: url.data,
			params:url.data,
			headers: headers
		}).then(res => {
			// console.log(res);
			// if (res.data.code == 401 ) {
			//  localStorage.removeItem('info');
			// Toast('登陆状态过期，请重新登陆');
			// router.push({path:'login'}).catch(err => { console.log(err) })
			// }
			resolve(res.data)
		}).catch(err => {
			// Toast('网络状态不佳...');
			// localStorage.removeItem('info');
			// Toast('登陆状态过期，请重新登陆');
			// router.push({path:'login'})
			// console.log(err)
		})
	})
}

export default request;
