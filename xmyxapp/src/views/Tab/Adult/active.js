import React, { Component } from "react"
import {getlist12,getlist13} from './model'
import './index.scss'
import {PullToRefresh} from 'antd-mobile';
class ActiveR extends Component {
	constructor(props) {
	  super(props);
	   
	  this.state = {
	  	refreshing: false,
     	down: true,
     	need:0,
     	data: [],
	  	adultlist:[]
	  };
	}
	componentDidMount(){

		getlist13(this.props.match.params.id).then(res=>{
			// meets a challenge point
			this.setState({adultlist:res.items.list
			})})
			
	}
    render() {
        return( 
      <div>
       <div >
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
        getlist13(this.props.match.params.id,this.state.need).then(res=>{this.setState({
      refreshing: false,adultlist:[...this.state.adultlist,...res.items.list]
      })})}} >
       
      </PullToRefresh>
       </ul>
       </div>
		</div>)
    }
}
export default ActiveR