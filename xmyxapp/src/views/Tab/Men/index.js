import React, {
	Component
} from "react"
import axios from 'axios'
import "./index.scss"
import {
	getLittle,
} from './model.js'
import {
	PullToRefresh,
	ListView,
	Button
} from 'antd-mobile'



class Man extends Component {
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
			url: `http://www.xiongmaoyouxuan.com/api/tab/5?start=0`
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
		return <div id="hzb_man">
                    <div className="hzb_up">
                        <div className="hzb_nav">
                        <span className="hzb_line"></span>
                        <span className="hzb_text"></span>
                        <span className="hzb_con">精选潮流</span>
                        <span className="hzb_text"></span>
                        <span className="hzb_line"></span>
                        </div>
                        <ul id="hzb_list"> 
                                {
                                    this.state.littleList.map(item=>
                                <li key={item.id}>
                                <img src={item.imageUrl}/>
                                <p>{item.title}</p>
                                </li>)
                                }
                        </ul>
                    </div>
        
                    <div className="hzb_content">
                            <div className="hzb_down">
                                <div className="hzb_nav">
                                    <span className="hzb_line"></span>
                                    <span className="hzb_text"></span>
                                     <span className="hzb_con">大家都在逛</span>
                                    <span className="hzb_text"></span>
                                    <span className="hzb_line"></span>
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
				    	><ul id="hzb_tupian">{this.state.datalist.map(item=>
					        <li key={item.id}>
					            <img src={item.image}/>
					            <div className="hzb_info">
					                <p>{item.title}</p>
					                {
					                    this.state.icon==1?
					                <span className="hzb_taobao">淘宝{item.platform}</span>
					                :<span className="hzb_tianmao">天猫{item.platform}</span>
					                }
					                <span className="hzb_bao">包邮</span>
					                <div className="hzb_d1">                                                                                           
					                <span className="hzb_price">￥{item.price}</span>
					                <span className="hzb_num">{item.saleNum}人已买</span>
					                </div>
					            </div>
					        </li>
				    		)}
						</ul>
					</PullToRefresh>
 				</div>
	}
}

export default Man