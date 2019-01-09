import React, {
	Component
} from "react"
import "./index.scss"
import {
	getLittle
} from './model.js'

class Manshoes extends Component {
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
                                <ul id="hzb1_tupian">
                                    {
                                        this.state.datalist.map(item=>
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
                                        )
                                    }
                                </ul>
                            </div>
                    </div>
 				</div>
	}
}
export default Manshoes