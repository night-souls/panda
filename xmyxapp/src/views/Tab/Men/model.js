import axios from 'axios'
import {
	PullToRefresh,
	ListView,
	Button
} from 'antd-mobile'

function getLittle() {
	return axios({
		url: "http://www.xiongmaoyouxuan.com/api/tab/5?start=0"
	}).then(res => {

		return res.data.data;
	})
}



export {
	getLittle,
}