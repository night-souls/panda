import React, { Component } from "react"
import "./index.scss"
import { connect } from "react-redux"
import getDetailList from './model'
import ReactSwipe from "react-swipe"

import "swiper/dist/css/swiper.css"

class accessoriesDetail extends Component {
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
            console.log(res.descContentList)
        })
        
        
    }
        
    

    componentWillUnmount() {
        this.props.show();
    }


    render() {
        return <div id="womenDetail">
        <span className="jump" onClick={this.handleClick.bind(this)}> {'<'} </span>
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
        <span className="tao">淘</span>
        <span className="you">包邮</span>
       <p>{this.state.info.title}</p>
       <span className="money">￥{this.state.info.price}</span>
       <span className="count">月销量：{this.state.info.saleNum}</span>
       </div>
       <article>
           <span className="Line1"></span>
           <p>淘宝图文详情</p>
           <span className="Line2"></span>
       <ul className="down">           
               {
                this.state.downList.length==0?
                null
                   :this.state.downList.map(item=>
                       <li>  
                            {item.photo?                   
                            <img src={item.photo.url}/> 
                                :null}
                        </li> 
                    )
               }
                          
       </ul>
       </article>
        <footer>
            <a href="#">去淘宝购买</a>
        </footer>
            
        </div>
    }
    handleClick(){
        this.props.history.go(-1);
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



})(accessoriesDetail)


