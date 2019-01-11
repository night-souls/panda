import axios from 'axios'


function getCategory(id, count) {
	return axios({
		url: `http://www.xiongmaoyouxuan.com/api/category/${id}/items?start=${count}&sort=0`
	}).then(res => {

		return res.data.data;
	})
}



export {
	getCategory
}