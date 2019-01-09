import axios from 'axios'

  function getLittle(){
      return axios({
          url:"http://www.xiongmaoyouxuan.com/api/tab/2?start=0"   
      }).then(res=>{
            //console.log(res.data.data)
            return res.data.data;
      })
  }        
  


  export  {getLittle}