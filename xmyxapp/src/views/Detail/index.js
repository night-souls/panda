import React, { Component } from "react"
import { connect } from "react-redux"
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import store from "../../store"
import {getlist124,getlist125} from '../Tab/Underwear/model'
import '../Tab/Underwear/index.scss'
class Detail extends Component {
    constructor(props) {
        super(props);

      this.state = {
        detail: {},
        adultlist:[],
        img:[]
        };
    }
    

     back1(){
    this.props.history.go(-1)
    }
    componentWillMount() {
        this.props.hide();
    }
    componentDidMount() {
      
           getlist125(this.props.match.params.id).then(res=>{
          console.log(res.detail.descContentList.shift(),res.detail.descContentList.pop())
            // meets a challenge point
            this.setState({detail:res.detail,adultlist:res.detail.descContentList,
        img:res.detail.photo
            },()=>{
       var mySwiper = new Swiper('.lab', {
       autoplay:true,
       loop:true
      })})})}
    
    
    componentWillUnmount() {
        this.props.show();
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
          <div className="outsideback1" onClick={this.back1.bind(this)}> 返回 </div>
          <p>{this.state.detail.title}</p>
          <p>${this.state.detail.price}</p>
          { 
          this.state.adultlist.length? 
          this.state.adultlist.map(item=>
           
          <li key={item.image.id}>  
          <img src={item.image.url}/>

          </li> ):null
          }
         </div>
        </div>
    )
    }
}
export default connect(null, {
    show() {
        return {
            type: "ShowNavbar",
            payload: true
        }
    },
    hide() {
        return {
            type: "HideNavbar",
            payload: false
        }
    }

})(Detail)