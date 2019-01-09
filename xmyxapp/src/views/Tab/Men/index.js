import React, {
	Component
} from "react"
import "./index.scss"
import {
	getLittle
} from './model.js'

class Man extends Component {
	constructor(props) {
		super(props);

		this.state = {
			littleList: [],
			datalist: [],
			infoList: [],
			icon: 1
		};
	}
	componentDidMount() {
		getLittle().then(res => {
			console.log(res)
			this.setState({
				littleList: res.categories,
				datalist: res.items.list,
				icon: res.items.list.platform
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
                                <ul id="hzb_tupian">
                                    {
                                        this.state.datalist.map(item=>
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
                                        )
                                    }
                                </ul>
                            </div>
                    </div>
 				</div>
	}
}
export default Man