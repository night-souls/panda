import axios from 'axios'


function getC(id) {
	return axios({
		url: `http://www.xiongmaoyouxuan.com/api/detail?id=${id}&normal=1&sa=`
	}).then(res => {

		return res.data.data;
	})
}



export {
	getC
}