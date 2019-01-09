import axios from "axios"
function getLunbo() {
    return axios({
        url: "http://www.xiongmaoyouxuan.com/api/tab/1?start=0"
    }).then(res => {
        console.log(res.data.data.topList)
        return res.data.data
    })
}
function getImg() {
    return axios({
        url: "http://www.xiongmaoyouxuan.com/api/tab/1?start=0"
    }).then(res => {
        console.log(res.data.data.topList)
        return res.data.data
    })

}
export { getLunbo, getImg }
