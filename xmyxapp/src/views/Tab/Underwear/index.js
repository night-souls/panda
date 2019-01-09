import { PullToRefresh, Button } from 'antd-mobile';
import React, { Component } from "react"
import axios from 'axios'
import {getlist123} from "./model";
import './index.scss'
import {NavLink} from "react-router-dom"
function genData1() {
  const dataArr = [];
  for (let i = 0; i <20; i++) {
    dataArr.push(i);
  }
  return dataArr;
}

class Underwear extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	refreshing: false,
     	down: true,
     	count1234:0,
     	data: [],
	  	underwearli:[],
	  	underwearlist:[]
	  };
	}
	 componentWillMount(){

			axios({url:"http://www.xiongmaoyouxuan.com/api/tab/16?start=0"}).then(res=>{
			console.log(res.data.data.categories)
			this.setState({
				underwearli:res.data.data.categories
			})})}
	   componentDidMount(){
    getlist123(this.state.count1234)
			axios({
			url:"http://www.xiongmaoyouxuan.com/api/tab/16/feeds?start=0&sort=0",
		}).then(res=>{
			console.log(res.data.data.list)
			this.setState({
				underwearlist:res.data.data.list
			})
	})
    }
    render() {
        return <div>
        <p className="ltitle">潮流精选</p>
       <ul className="top23">
       <li><NavLink to="/wenxiong" activeClassName="wenxiong"><img src={
       	this.state.underwearli.length?this.state.underwearli[0].imageUrl:null}/><p>文胸</p>
       	</NavLink></li>
       <li><NavLink to="/nvshineiku"  activeClassName="nvshineiku" ><img src={
       	this.state.underwearli.length?this.state.underwearli[1].imageUrl:null}/><p>女士内裤</p>
       	</NavLink></li>
       <li><NavLink to="/shuiyi"  activeClassName="shuiyi" ><img src={
       	this.state.underwearli.length?this.state.underwearli[2].imageUrl:null}/><p>睡衣</p>
       	</NavLink></li>
       <li><NavLink to="/wazi"  activeClassName="wazi" ><img src={
       	this.state.underwearli.length?this.state.underwearli[3].imageUrl:null}/><p>袜子</p>
       	</NavLink></li>
       <li><NavLink to="/dadi"  activeClassName="dadi" ><img src={
       	this.state.underwearli.length?this.state.underwearli[4].imageUrl:null}/><p>打底</p>
       	</NavLink></li>
       <li><NavLink to="/nanshineiku"  activeClassName="nanshineiku" ><img src={
       	this.state.underwearli.length?this.state.underwearli[5].imageUrl:null}/><p>男士内裤</p>
       	</NavLink></li>
       </ul>
       <p className="ltitle">大家都在用</p>
       <ul className="down8">
       		{	
       			this.state.underwearlist.length?
       			this.state.underwearlist.map(item=>
					<li key={item.id}
					 // onClick={this.getinfo.bind(this,item.id)}
					 >
					<img src={item.image} title={item.qunTitle}/>
					<p>{item.title}</p><div></div><div><span className="count5">${item.originPrice}</span></div></li>
				):null
       	}
       </ul>
             <PullToRefresh
        damping={60}
        ref={el => this.ptr = el}
        direction={ 'up' }
        refreshing={this.state.refreshing}
        onRefresh={() => { 
        	this.setState({ refreshing: true,count1234:this.state.count1234+=20 });
    	getlist123(this.state.count1234).then(res=>{this.setState({
				refreshing: false,underwearlist:[...this.state.underwearlist,...res.list]
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
		</div>



    }
 
}
export default Underwear