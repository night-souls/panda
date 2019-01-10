import axios from "axios"
function getList() {
    return axios({
        url: "http://www.xiongmaoyouxuan.com/api/tabs?sa="
    }).then(res => {
        console.log(res.data.data.list)
        return res.data.data.list
    })
}
export { getList }