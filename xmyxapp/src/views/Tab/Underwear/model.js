import axios from "axios";
function getlist123(id){
	return  axios({
			url:`http://www.xiongmaoyouxuan.com/api/tab/16/feeds?start=${id}&sort=0`,
		}).then(res=>{
			return res.data.data;
	})

}
function getlist124(id,count){
	return  axios({
		url:`http://www.xiongmaoyouxuan.com/api/category/${id}/items?start=${count}&sort=0`,
		}).then(res=>{
			return res.data.data;
	})

}
function getlist125(itemId){
	return  axios({
		url:`http://www.xiongmaoyouxuan.com/api/detail?id=${itemId}&normal=1&sa=`
		}).then(res=>{
			return res.data.data;
	})

}
export {getlist123,getlist124,getlist125};
