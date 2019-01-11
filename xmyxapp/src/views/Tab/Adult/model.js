import axios from "axios";
function getlist12(id){
	return  axios({
			url:`http://www.xiongmaoyouxuan.com/api/tab/17/feeds?start=${id}&sort=0`,
	
		}).then(res=>{	
			return res.data.data;
	})

}

function getlist13(itemId,need){
	return  axios({
		url:`http://www.xiongmaoyouxuan.com/api/category/${itemId}/items?start=${need}&sort=0`,
			
		}).then(res=>{	
			
			return res.data.data;
	})

}

export {getlist12,getlist13};
