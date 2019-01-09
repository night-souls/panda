
import React, { Component } from "react"
import axios from 'axios'
import './index.css'
import {NavLink} from "react-router-dom"

class Underwear extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
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
    
			axios({
			url:"http://www.xiongmaoyouxuan.com/api/tab/16/feeds?start=0&sort=0",
			// headers:{
			// 	'X-Client-Info': '{"a":"3000","ch":"1002","v":"1.0.0","e":"154277371928424093566579"}',
			// 	'X-Host': 'mall.cfg.common-banner'

			// }
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
		</div>
    }
 
}
export default Underwear