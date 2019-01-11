import React, {
	Component
} from "react"
import axios from 'axios'
import "./index.scss"
import {
	getCategory,
} from './model.js'
import {
	PullToRefresh,
	ListView,
	Button
} from 'antd-mobile'
import {
	NavLink
} from 'react-router-dom'

class Category extends Component {

	constructor(props) {
		super(props);

		this.state = {
			refreshing: false,
			down: true,
			count: 0,
			datalist: [],
			// littleList: []
		};
	}

	// componentWillMount(id) {
	// 	axios({
	// 		url: `http://www.xiongmaoyouxuan.com/api/category/${this.props.match.params.id}/items?start=0&sort=0`
	// 	}).then(res => {
	// 		console.log(res)
	// 		this.setState({
	// 			littleList: res.data.data.items.list
	// 		})

	// 	})

	// }
	componentDidMount() {
		getCategory(this.props.match.params.id).then(res => {
			console.log(res)
			this.setState({
				datalist: res.items.list

			})

		})
	}

	// componentDidMount() {
	// 	console.log(this.props.match.params.id);
	// }
	render() {
		console.log(this.props.pramas || this.props.location); //state是undefined
		console.log(this.props.pramas); //这是undefined
		console.log(this.props.location); //id存在这里的pathname里
		console.log(this.props.match.params);
		console.log(this.props);
		return <div id="hzb2_man">
				    <PullToRefresh
				        damping={40}
				        ref={el => this.ptr = el}
				        direction={ 'up' }
				        refreshing={this.state.refreshing}
				        onRefresh={() => { 
				        	this.setState({ refreshing: true,count:this.state.count+=20 });
				    	getCategory(this.props.match.params.id,this.state.count).then(res=>{this.setState({
								refreshing: false,datalist:[...this.state.datalist,...res.items.list]
							})})}}
				    	><ul id="hzb2_tupian">{this.state.datalist.map(item=>
					        <li key={item.id} onClick={this.handleClick.bind(this,item.url.slice(-7))}>
					            <img src={item.image}/>
					            <div className="hzb2_info">
					                <p>{item.title}</p>
					                {
					                    this.state.icon==1?
					                <span className="hzb2_taobao">淘宝{item.platform}</span>
					                :<span className="hzb2_tianmao">天猫{item.platform}</span>
					                }
					                <span className="hzb2_bao">包邮</span>
					                <div className="hzb2_d1">                                                                                           
					                <span className="hzb2_price">￥{item.price}</span>
					                <span className="hzb2_num">{item.saleNum}人已买</span>
					                </div>
					            </div>
					        </li>
				    		)}
						</ul>
					</PullToRefresh>	
				</div>
	}
	handleClick(id) {
		console.log(id)
		this.props.history.push(`/c/${id}`)
	}
}
export default Category