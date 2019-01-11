import React, { Component } from "react"
import {getlist14} from './model'
import './index.scss'
import {connect} from "react-redux"
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
class detail17 extends Component {
	constructor(props) {
	  super(props);
	   
	  this.state = {
     	detail: {},
	  	adultlist:[],
      img:[]
	  };
	}
  componentWillMount(){
    this.props.hide()
  }
  componentWillUnmount(){
    this.props.show()
  }
	componentDidMount(){
   
		getlist14(this.props.match.params.id).then(res=>{
			// meets a challenge point
			this.setState({detail:res.detail,adultlist:res.detail.descContentList,
        img:res.detail.photo
			},()=>{
       var mySwiper = new Swiper('.lab', {
       autoplay:true,
       loop:true
      })})})
	}
    render() {
        return( 
      <div>
         <div className="datu">

             <div className='lab swiper-container'>
                  <div className='swiper-wrapper'>
                    {  
                        this.state.img.map(item=>
                        <div key={item.id} ref="myli"  className= "swiper-slide"> 
                        <img src={item.url}/>
                        </div>)
                    }
                  </div>  
             </div>  

          <p>{this.state.detail.title}</p>
          <p>${this.state.detail.originPrice}</p>
          { 
          this.state.adultlist.length? 
          this.state.adultlist.map(item=>
          <li key={item.image.id}>  
          <img src={item.image.url}/>

          </li> ):null
          }
         </div>
		</div>
    )}
   

}
export default connect(
  null,{
      show(){return{type:'ShowNavbar',
      payload:true}},
      hide(){return{
        type:'HideNavbar',payload:false
      }}
  })(detail17)