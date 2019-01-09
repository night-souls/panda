import axios from "axios";
function getlist12(id){
	return  axios({
			url:`http://www.xiongmaoyouxuan.com/api/tab/17/feeds?start=${id}&sort=0`,
	
		}).then(res=>{
			console.log(res.data.data.list);
			return res.data.data;
	})

}
export {getlist12};
