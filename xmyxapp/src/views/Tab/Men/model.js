import axios from 'axios'

function getLittle() {
	return axios({
		url: "http://www.xiongmaoyouxuan.com/api/tab/5?start=0"
	}).then(res => {

		return res.data.data;
	})
}

function getMenList() {
	return axios({
		url: "http://www.xiongmaoyouxuan.com/api/tab/5?start=0",

	}).then(res => {
		// console.log(res.data);
		return res.data.data.items;
	})

}


export {
	getLittle,
	getMenList
}