import axios from 'axios'

function getBeautyList(id){
    return axios({
        url:`http://www.xiongmaoyouxuan.com/api/detail?id=${id}&normal=1&sa=`
    }).then(res=>{
          console.log(res.data.data)
          return res.data.data.detail;
    })
}



export default getBeautyList