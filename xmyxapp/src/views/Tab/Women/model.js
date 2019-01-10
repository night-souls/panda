import axios from 'axios'

  function getLittle(id){
      return axios({
          url:`http://www.xiongmaoyouxuan.com/api/tab/2?start=${id}`   
      }).then(res=>{
            //console.log(res.data.data)
            return res.data.data;
      })
  }        
export  {getLittle}