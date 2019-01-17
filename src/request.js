/*
* @Author: iMocco
* @Date:   2019-01-17 19:02:50
* @Last Modified by:   iMocco
* @Last Modified time: 2019-01-17 19:38:16
*/
import axios from 'axios';
axios.defaults.baseURL = 'https://api.leancloud.cn/1.1'
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['X-LC-Id'] = 'your appId';
axios.defaults.headers.common['X-LC-Key'] = 'your appKey';

// 返回封装的函数
export default {
	http(data) {
		let options = {
			method: data.type,
			url: data.url,
		}
		options[data.type.toUpperCase() == 'POST' ? 'data':'params'] = data.data
		return axios(options)
		.then(result => {
			return result;
		}).catch(error => {
			return error;
		});
	}
};