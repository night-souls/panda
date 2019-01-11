import React, {
	Component
} from "react"
import axios from 'axios'
import "./index.scss"
import {
	getC
} from './model.js'
import {
	PullToRefresh,
	ListView,
	Button
} from 'antd-mobile'
import {
	NavLink
} from 'react-router-dom'
import {
	connect
} from "react-redux"

class C extends Component {

	constructor(props) {
		super(props);

		// this.state = {
		// 	refreshing: false,
		// 	down: true,
		// 	count: 0,
		// 	datalist: [],

		// };
	}

	componentWillMount() {

		this.props.hide();
	}
	componentWillUnmount() {
		this.props.show();
	}



	// componentDidMount() {
	// 	getC(this.props.match.params.id).then(res => {
	// 		console.log(res)
	// 		this.setState({
	// 			datalist: res.list

	// 		})

	// 	})
	// }


	render() {

		return <div id="hzb3_man">
					<ul class="over">
						<li>轮播 加载 失败  Loading...</li><br /><br />
						<li>找不到介绍路径  Loading...</li><br /><br />
						<li>找不到价格路径  Loading...</li><br /><br />
						<li>样图式加载失败  Loading...</li><br /><br />
						<li>评价 共计 0 条  Loading...</li><br /><br />
					</ul>
					
					
					
					
				</div>
	}
	// handleClick(id) {
	// 	console.log(id)
	// 	this.props.history.push(`/c/${id}`)
	// }
}
export default connect(null, {
	show() {
		return {
			type: "ShowNavbar",
			payload: true
		}
	},
	hide() {
		return {
			type: "HideNavbar",
			payload: false
		}
	}
})(C)