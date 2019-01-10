import axios from "axios"
function getLunbo() {
    return axios({
        url: "http://www.xiongmaoyouxuan.com/api/tab/1?start=0"
    }).then(res => {

        return res.data.data
    })
}
function getImg() {
    return axios({
        url: "http://www.xiongmaoyouxuan.com/api/tab/1/feeds?start=0&sort=0"
    }).then(res => {
        console.log(res.data.data.list)
        return res.data.data.list
    })

}
export { getLunbo, getImg }
