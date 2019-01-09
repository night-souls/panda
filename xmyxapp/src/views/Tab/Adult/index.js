import { PullToRefresh, Button } from 'antd-mobile';
import React, { Component } from "react"
import axios from 'axios'
import './index.scss'
import {getlist12} from "./model";
import {NavLink} from "react-router-dom"
class Adult extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	refreshing: false,
     	down: true,
     	count123:0,
     	data: [],
	  	adultli:[],
	  	adultlist:[]
	  };
	}
	componentWillMount(){
		axios({url:`http://www.xiongmaoyouxuan.com/api/tab/17?start=0`}).then(res=>{
			this.setState({adultli:res.data.data.categories
			})})
	}
	componentDidMount(){
		getlist12(this.state.count123).then(res=>{
			this.setState({adultlist:res.list
				
			})})}
    render() {
        return( <div>
        <div>
      	<p className="ltitle">潮流精选</p>
       <ul className="xiaotu">
	     
       <li><NavLink to="/biyuntao" activeClassName="biyuntao"><img src={
       	this.state.adultli.length?
       this.state.adultli[0].imageUrl
       	:null
       }/>
      <p>避孕套</p></NavLink></li>
       <li><NavLink to="/nvyong"  activeClassName="nvyong" ><img src={
       	this.state.adultli.length?this.state.adultli[1].imageUrl:null
       }/>
       <p>女用</p></NavLink></li>
       <li><NavLink to="/nanyong"  activeClassName="nanyong" ><img src={
       	this.state.adultli.length?this.state.adultli[2].imageUrl:null
       }/>
       <p>男用</p></NavLink></li>
       <li><NavLink to="/qingquneiyi"  activeClassName="qingquneiyi" ><img src={
       	this.state.adultli.length?this.state.adultli[3].imageUrl:null
       }/>
       <p>情趣内衣</p></NavLink></li>

   		
       </ul>
       </div>
       <div>
       <p className="ltitle">大家都在用</p>
        <ul className="down1">
       		{	
       			this.state.adultlist.length?
       			this.state.adultlist.map(item=>
					<li key={item.id}
					 // onClick={this.getinfo.bind(this,item.id)}
					 >
					<img src={item.image} title={item.qunTitle} className="goods"/>
					<p>{item.title}</p><div className="baodi3">
					<span className="baodi1">猫天</span>
					 <span className="baodi2"> 	包递</span></div>
					 <p><span className="count5">${item.originPrice}</span></p></li>
				):null
       	}
       </ul>
       </div>
      <PullToRefresh
        damping={60}
        ref={el => this.ptr = el}
        direction={ 'up' }
        refreshing={this.state.refreshing}
        onRefresh={() => { 
        	this.setState({ refreshing: true,count123:this.state.count123+=20 });
    	getlist12(this.state.count123).then(res=>{this.setState({
				refreshing: false,adultlist:[...this.state.adultlist,...res.list]
			})})}}
      >{	
       	  this.state.data.length?
		  this.state.data.map(i=> (
          <li key={i.id}
		  // onClick={this.getinfo.bind(this,item.id)}
          style={{ textAlign: 'center', padding: 20 }}>
          <img src={i.image} title={i.qunTitle} className="goods"/>
          <p>{i.title}</p><div className="baodi3">
          <span className="baodi1">猫天</span>
          <span className="baodi2"> 包递</span></div>
          <p><span className="count5">${i.originPrice}</span></p></li>
       		 )):null	
       	}
       
      </PullToRefresh>
		</div>)
    }
    componentWillUpdate(){
    		console.log('about to flash')
    }
   
}
function genData1() {
  const dataArr = [];
  for (let i = 0; i <20; i++) {
    dataArr.push(i);
  }
  return dataArr;
}

export default Adult
