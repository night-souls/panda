import axios from "axios";
function getlist(){
	return  axios({
			url:"http://www.xiongmaoyouxuan.com/api/tab/6?start=0",
	
		}).then(res=>{
			// console.log(res.data);
			return res.data.data;
	})

}
export {getlist};
