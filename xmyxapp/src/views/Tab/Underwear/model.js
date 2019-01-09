import axios from "axios";
function getlist123(id){
	return  axios({
			url:`http://www.xiongmaoyouxuan.com/api/tab/16/feeds?start=${id}&sort=0`,
		}).then(res=>{
			return res.data.data;
	})

}
export {getlist123};
