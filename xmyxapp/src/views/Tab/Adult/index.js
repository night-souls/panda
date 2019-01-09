
import React, { Component } from "react"
import axios from 'axios'
import './index.css'
import {NavLink} from "react-router-dom"
class Adult extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	adultli:[],
	  	adultlist:[]
	  };
	}
	componentWillMount(){
		axios({url:"http://www.xiongmaoyouxuan.com/api/tab/17?start=0"}).then(res=>{
			console.log(res.data.data.categories,'xiaotu',this.state.adultli)
			this.setState({
				adultli:res.data.data.categories
			})
	})
		
	}
	componentDidMount(){
		axios({
			url:"http://www.xiongmaoyouxuan.com/api/tab/17/feeds?start=0&sort=0"}).then(res=>{
			console.log(res.data.data.list,this.state.adultli,this.state.adultlist)
			this.setState({
				adultlist:res.data.data.list
			})
	})
	}
    render() {
        return <div>
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
					 <p><span>${item.originPrice}</span></p></li>
				):null
       	}
       </ul>
       </div>
		</div>
    }
}
export default Adult