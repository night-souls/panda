import axios from "axios";
function getlist(id){
	return  axios({
			url:`http://www.xiongmaoyouxuan.com/api/tab/11?start=${id}&sort=0`,
			
	
		}).then(res=>{
			// console.log(res.data);
			return res.data.data;
	})

}
export {getlist};