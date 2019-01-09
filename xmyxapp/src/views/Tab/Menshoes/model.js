import axios from 'axios'

function getLittle() {
	return axios({
		url: "http://www.xiongmaoyouxuan.com/api/tab/19?start=0"
	}).then(res => {

		return res.data.data;
	})
}



export {
	getLittle
}