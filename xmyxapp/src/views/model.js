import axios from "axios"
function getLunbo() {
    return axios({
        url: "http://www.xiongmaoyouxuan.com/api/tab/1?start=0"
    }).then(res => {
        console.log(res.data.data.banners)
        return res.data.data.banners
    })
}
export { getLunbo }