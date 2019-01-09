import React, {
    Component
} from "react"
import "./index.scss"
import {
    getLittle
} from './model.js'
import axios from 'axios'
import {
    PullToRefresh,
    ListView,
    Button
} from 'antd-mobile'

class Manshoes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            refreshing: false,
            down: true,
            count: 0,
            littleList: [],
            datalist: [],
            infoList: [],
            icon: 1
        };
    }

    componentWillMount() {
        axios({
            url: `http://www.xiongmaoyouxuan.com/api/tab/19?start=0`
        }).then(res => {

            this.setState({
                littleList: res.data.data.categories
            })
        })

    }

    componentDidMount() {
        getLittle(this.state.count).then(res => {
            console.log(res)
            this.setState({
                datalist: res.list,
                icon: res.list.platform
            })
        })



    }
    render() {
        return <div id="hzb1_man">
                    <div className="hzb1_up">
                        <div className="hzb1_nav">
                        <span className="hzb1_line"></span>
                        <span className="hzb1_text"></span>
                        <span className="hzb1_con">精选潮流</span>
                        <span className="hzb1_text"></span>
                        <span className="hzb1_line"></span>
                        </div>
                        <ul id="hzb1_list"> 
                                {
                                    this.state.littleList.map(item=>
                                <li key={item.id}>
                                <img src={item.imageUrl}/>
                                <p>{item.title}</p>
                                </li>)
                                }
                        </ul>
                    </div>
        
                    <div className="hzb1_content">
                            <div className="hzb1_down">
                                <div className="hzb1_nav">
                                    <span className="hzb1_line"></span>
                                    <span className="hzb1_text"></span>
                                     <span className="hzb1_con">大家都在逛</span>
                                    <span className="hzb1_text"></span>
                                    <span className="hzb1_line"></span>
                                </div>
                            </div>
                    </div>
                    <PullToRefresh
                        damping={40}
                        ref={el => this.ptr = el}
                        direction={ 'up' }
                        refreshing={this.state.refreshing}
                        onRefresh={() => { 
                            this.setState({ refreshing: true,count:this.state.count+=20 });
                        getLittle(this.state.count).then(res=>{this.setState({
                                refreshing: false,datalist:[...this.state.datalist,...res.list]
                            })})}}
                        ><ul id="hzb1_tupian">
                        {this.state.datalist.map(item=>
                            <li key={item.id}>
                                <img src={item.image}/>
                                <div className="hzb1_info">
                                    <p>{item.title}</p>
                                    {
                                        this.state.icon==1?
                                    <span className="hzb1_taobao">淘宝{item.platform}</span>
                                    :<span className="hzb1_tianmao">天猫{item.platform}</span>
                                    }
                                    <span className="hzb1_bao">包邮</span>
                                    <div className="hzb1_d1">                                                                                           
                                    <span className="hzb1_price">￥{item.price}</span>
                                    <span className="hzb1_num">{item.saleNum}人已买</span>
                                    </div>
                                </div>
                            </li>
                            )}
                        </ul>
                    </PullToRefresh>
 				</div>
    }
}

export default Manshoes