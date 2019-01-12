import { PullToRefresh} from 'antd-mobile';
import React, { Component } from "react"
import axios from 'axios'
import ReactDOM from 'react-dom'
import {getlist123} from "./model";
import './index.scss'
import {NavLink} from "react-router-dom"
class Underwear extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	refreshing: false,
     	down: true,
     	need:0,
     	data: [],
	  	underwearli:[],
	  	underwearlist:[],
      height: document.documentElement.clientHeight,
	  };
	}
	 componentWillMount(){
			axios({url:"http://www.xiongmaoyouxuan.com/api/tab/16?start=0"}).then(res=>{
			this.setState({
				underwearli:res.data.data.categories
			})})}
	   componentDidMount(){
      const hei = this.state.height - ReactDOM.findDOMNode(this.lv).offsetTop;
    		getlist123(this.state.need).then(res=>{
			this.setState({	underwearlist:res.list, height: hei})
	})
    }
    render() {
        return <div>
        <p className="ltitle">潮流精选</p>
       <ul className="top23">
       {
        this.state.underwearli.length?
        this.state.underwearli.map(item=>
        <li onClick={this.todong1.bind(this,item.url.slice(-4))} key={item.id}>
        <img src={item.imageUrl }/>
         <p>{item.title}</p></li>):null
        }

       </ul>
       <p className="ltitle">大家都在用</p>
       <ul className="my1234">
       <PullToRefresh
        damping={60}
        ref={el => this.lv = el}
        style={{ height: this.state.height, overflow: 'auto', }}
        direction={ 'up' }
        refreshing={this.state.refreshing}
        onRefresh={() => { 
          this.setState({ refreshing: true,need:this.state.need+=20 });
        getlist123(this.state.need).then(res=>{this.setState({
        refreshing: false,underwearlist:[...this.state.underwearlist,...res.list]
      })})}}
      >
     {this.state.underwearlist.length ?
                this.state.underwearlist.map(item => 
                    <li key={item.id} onClick={this.toDetail.bind(this,item.id)}>
                {item.type == 1 ?
                        <div className="commodity-card" key={item.id}>

                        <div className="commodity-container" key={item.id}>
                            <img src={item.image} className="commodity-card-img" key={item.id}/>
                        </div>
                        
                    <div className="commodity-card-msg">
                            <div className="commodity-card-title">{item.qunTitle}</div>
                            <div className="commodity-card-keyword">
                                <span className="keyword">天猫</span>
                                <span className="free-postage">包邮</span>
                            </div>
                            <div className="commodity-card-foot">
                               <div className="left">
                                    <span className="price">
                                        <span className="price-tag">￥</span>
                                        <span className="price-strong">{parseInt(item.price)}
                                        </span>
                               {(item.price * 10 - parseInt(item.price) * 10) != 0 ?

                            <span className="digit">
                            .{item.price * 10 - parseInt(item.price) * 10} </span> : null}
                                    </span>
                                {(item.saleNum * 0.0001) < 1 ? <span className="sale-num">
                                {item.saleNum}人已买</span> : <span className="sale-num">
                                {Math.floor(item.saleNum * 0.0001) + 0.1}万人已买</span>}
                                    
                                    <span className="coupon-value">{item.couponValue}</span>
                               </div> 
                            </div>
                        </div>
                    </div> : <div className="banner-card" style={{
                            backgroundImage: `url(${item.image})`
                        }}></div>}
                </li>

                ): null
                }
      </PullToRefresh>
       		
       </ul>
             
		</div>
    }
     toDetail(id){
      this.props.history.push(`/detail/${id}`)
     }
     todong1(id){
        // console.log(this.props.history)
       this.props.history.push(`/tab/16/${id}`)
    }
      componentWillUpdate(){
    	
    }
}
export default Underwear