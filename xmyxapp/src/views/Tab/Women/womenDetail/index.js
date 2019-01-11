import React, { Component } from "react"
import "./index.scss"
import { connect } from "react-redux"
import getDetailList from './model'
import ReactSwipe from "react-swipe"
import Swiper from "swiper"
import "swiper/dist/css/swiper.css"

class womenDetail extends Component {
    constructor(props) {
        super(props);

        this.state={
            detailList:[],
            infoList:[],
            downList:[],
            info:{}
        }



    }
    

    componentWillMount() {

        this.props.hide();
    } 
    componentDidMount() {
        console.log(this.props.history.location.pathname.slice(-7))


        getDetailList(this.props.history.location.pathname.slice(-7)).then(res=>{
            console.log(res.photo);
            console.log(res,'aaa');
            this.setState({
                detailList:res.photo,
                downList:res.descContentList,
                info:res
                
            })
        })
        
        
    }
        
    

    componentWillUnmount() {
        this.props.show();
    }


    render() {
        return <div id="womenDetail">
        <span className="jump"> {'<'} </span>
		<ul>
        
        <li>
        <ReactSwipe
            key={this.state.detailList.length}
            className="carousel"
            swipeOptions={{
                continuous: true,
                auto: 2000
            }}
            >
            {
                this.state.detailList.map(item=>
                        
                        <div key={item.id} className="lunbo">
                        <img src={item.url}/>
                        </div>    
                    )
            }</ReactSwipe>
            </li>
            
        </ul>
        <div className="price">
       <p>{this.state.info.title}</p>
       <span>￥{this.state.info.price}</span>
       <span>月销量：{this.state.info.saleNum}</span>
       </div>
       <article>
           <p>淘宝图文详情</p>
       <ul className="down">
           <li>
               {
                   this.state.downList.map(item=>
                        <img src={item.photo.url}/>
                    )
               }
           </li>
       </ul>
       </article>
        <footer>
            <a href="#">去淘宝购买</a>
        </footer>
            
		</div>
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



})(womenDetail)