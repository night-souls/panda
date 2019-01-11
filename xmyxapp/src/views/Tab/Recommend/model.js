import axios from "axios"
function getLunbo() {
    return axios({
        url: "http://www.xiongmaoyouxuan.com/api/tab/1?start=0"
    }).then(res => {

        return res.data.data
    })
}
function getImg(id) {
    return axios({
        url: `http://www.xiongmaoyouxuan.com/api/tab/1/feeds?start=${id}&sort=0"`
    }).then(res => {
        console.log(res.data.data.list)
        return res.data.data.list
    })

}
export { getLunbo, getImg }

