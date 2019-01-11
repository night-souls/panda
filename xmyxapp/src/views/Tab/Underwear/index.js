import { PullToRefresh} from 'antd-mobile';
import React, { Component } from "react"
import axios from 'axios'
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
	  	underwearlist:[]
	  };
	}
	 componentWillMount(){
			axios({url:"http://www.xiongmaoyouxuan.com/api/tab/16?start=0"}).then(res=>{
			this.setState({
				underwearli:res.data.data.categories
			})})}
	   componentDidMount(){
    		getlist123(this.state.need).then(res=>{
			this.setState({	underwearlist:res.list})
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
        	this.setState({ refreshing: true,need:this.state.need+=20 });
    		getlist123(this.state.need).then(res=>{this.setState({
				refreshing: false,underwearlist:[...this.state.underwearlist,...res.list]
			})})}}
      >
      </PullToRefresh>
		</div>
    }
     todong1(id){
        // console.log(this.props.history)
       this.props.history.push(`/tab/16/${id}`)
    }
      componentWillUpdate(){
    	
    }
}
export default Underwear