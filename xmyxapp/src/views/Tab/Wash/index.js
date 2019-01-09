import React, { Component } from "react"
import "./index.scss"
import {getlist} from "./model";
class Commodity extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	navlist:[], 
	  	datalist:[]

	  };
	}
	componentDidMount(){
			getlist().then(res=>{
				console.log(res.items.list)
			//console.log(res);
			this.setState({
				navlist:res.categories,
				datalist:res.items.list,
				
			})
		})
	}
    render() {
        return <div id="Commodity">
        <div className="head"></div>
	        <div className="navlist">
	        	<div className="spilt-line">
	        		<span className="line-left"></span>
	        		<span className="dian-left"></span>
	        		<span className="line-title">潮流精选</span>
	        		<span className="dian-right"></span>
	        		<span className="line-right"></span>

	        	</div>
	     		<ul className="navlist-ul">
	     			{this.state.navlist.map(item=>
	     				<li key={item.id}>
	     				<img src={item.imageUrl}/>
	     				<span>{item.title}</span>
	     			</li>
	     			)}	     				
	     		</ul>
     		</div>
     		<div className="spilt-line">
	        		<span className="line-left"></span>
	        		<span className="dian-left"></span>
	        		<span className="line-title">大家都在逛</span>
	        		<span className="dian-right"></span>
	        		<span className="line-right"></span>
	        	</div>
	     
	        		<ul className="datalist-ul">
	     			{this.state.datalist.map(item=>
	     				<li key={item.id}>
	     				<img src={item.image}/>
	     				<div className="list-datil">
	     					{item.title}
	     				</div>
	     				<div className="express-detail">
	     					 {
	     					 item.platform===1?
	     					 <span className="taobao">淘宝</span>
	     					 :<span className="tianmao">天猫</span>
	     					}
	     					<span className="express">包邮</span>
	     				</div>
	     					<div className="piric-detail">
	     					<span className="price">￥{item.price}</span>
	     					<span className="saleNum">{item.saleNum}人已买</span>
	     					{
	     						item.couponValue==""?
	     						<span>{item.couponValue}</span>
	     						:<span className="couponValue">{item.couponValue}</span>
	     					}
	     				</div>
	     			</li>
	     			)}	     				
	     		</ul>
		</div>
    }
}
export default Commodity; 