import axios from 'axios'

function getLittle(count) {
	return axios({
		url: `http://www.xiongmaoyouxuan.com/api/tab/19/feeds?start=${count}&sort=0`
	}).then(res => {

		return res.data.data;
	})
}



export {
	getLittle
}