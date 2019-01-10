import {PullToRefresh} from 'antd-mobile';
import React, { Component } from "react"
import axios from 'axios'
import './index.scss'
import {getlist12} from "./model";
import {NavLink} from "react-router-dom"
import biyuntao from './biyuntao'
import nanyong from './nanyong'
import nvyong from './nvyong'
import qingquneiyi from './qingquneiyi'
import {Route,Switch} from "react-router-dom"
class Adult extends Component {
	constructor(props) {
	  super(props);
	   
	  this.state = {
	  	refreshing: false,
     	down: true,
     	need:0,
     	data: [],
	  	adultli:[],
	  	adultlist:[],
      isShow:false
	  };
	}
	componentWillMount(){
		axios({url:`http://www.xiongmaoyouxuan.com/api/tab/17?start=0`}).then(res=>{
      console.log(res.data.data.categories);
			this.setState({adultli:res.data.data.categories
			})})
	}
	componentDidMount(){
    console.log(this.props)
		getlist12(this.state.need).then(res=>{
			this.setState({adultlist:res.list
			})})
			
	}
    render() {
        return( 
      <div>
      	{/*{this.props.children}  */}
        <div  className={this.state.isShow?'hidediv':''}>
        <p className="ltitle">潮流精选</p>
       <ul className="xiaotu">
       
       <li onClick={this.state.adultli.length?
        this.todong.bind(this,this.state.adultli[0].id):null}><img src={
        this.state.adultli.length?this.state.adultli[0].imageUrl:null }/>
      <p>避孕套</p></li>
      <li onClick={this.state.adultli.length?
        this.todong.bind(this,this.state.adultli[1].id):null}><img src={
        this.state.adultli.length?this.state.adultli[1].imageUrl:null }/>
       <p>女用</p></li>
       <li onClick={this.state.adultli.length?
        this.todong.bind(this,this.state.adultli[2].id):null}><img src={
        this.state.adultli.length?this.state.adultli[2].imageUrl:null }/>
       <p>男用</p></li>
       <li><NavLink to="/tab/17/qingquneiyi" replace onClick={this.gai.bind(this)}>
        <img src={
        this.state.adultli.length?this.state.adultli[3].imageUrl:null }/>
       <p>情趣内衣</p></NavLink></li>
       </ul>
       </div>
       <div className={this.state.isShow?'hidediv':''}>
       <p className="ltitle1">大家都在用</p>
        <ul className="down1">
          { 
            this.state.adultlist.length?
            this.state.adultlist.map(item=>
          <li key={item.id}
           // onClick={this.getinfo.bind(this,item.id)}
           >
          <img src={item.image} title={item.qunTitle} className="goods"/>
          <p>{item.title}</p><div className="baodi3">
          <span className="baodi1">天猫</span>
           <span className="baodi2">  包邮</span></div>
           <p><span className="count5">${item.originPrice}</span></p></li>
          ):null
          }
      <PullToRefresh
        damping={60}
        ref={el => this.ptr = el}
        direction={ 'up' }
        refreshing={this.state.refreshing}
        onRefresh={() => { 
          this.setState({ refreshing: true,need:this.state.need+=20 });
        getlist12(this.state.need).then(res=>{this.setState({
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
          <span className="baodi1">天猫</span>
          <span className="baodi2"> 包邮</span></div>
          <p><span className="count5">${i.originPrice}</span></p></li>
           )):null  
          }
       
      </PullToRefresh>
       </ul>
       </div>
		</div>)
    }
    componentWillUpdate(){
        console.log('reflash')
    }
    componentWillUnmount(){
   
    }
    gai(){
      this.setState({isShow:true})   
    }
    todong(id){
      console.log(this.props)
       this.props.history.push(`/tab/17/${id}`)
    }
}


const Adult1 =(props)=><Adult {...props}>
            <Switch>
						<Route path="/tab/17/biyunptao" component={biyuntao}  exact/>
						<Route path="/tab/17/nvyong" component={nvyong} exact/>
						<Route path="/tab/17/nanyong" component={nanyong} exact/>
						<Route path="/tab/17/qingquneiyi" component={qingquneiyi} exact/>
            </Switch>
				  </Adult>

export {Adult1}
