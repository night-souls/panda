import axios from "axios"
function getList() {
    return axios({
        url: "http://www.xiongmaoyouxuan.com/api/tabs?sa="
    }).then(res => {
   
        return res.data.data.list
    })
}
export { getList }