import React, { Component } from "react"
import { getLunbo } from "./model"
import { getImg } from "./model"
import "./index.scss"
import ReactSwipe from "react-swipe"
import Swiper from "swiper"
import "swiper/dist/css/swiper.css"
import axios from "axios"
class Recommend extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lunbolist: [],
            imglist: [],
            toplist: [],
            datalist: []
        };
    }
    componentWillMount() {
        getLunbo().then(res => {

            this.setState({
                lunbolist: res.banners,
                imglist: res.gridsV2,
                toplist: res.topList


            })
        })
        getImg().then(res => {
            console.log(res)
            this.setState({
                datalist: res
            })
        })
    }
    componentDidUpdate() {

        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 3,
            spaceBetween: 30,
            freeMode: true,

        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true,
        // },
        });
    }


    render() {
        return (
            <div id="Index">
        <ReactSwipe
            key={this.state.lunbolist.length}
            className="carousel"
            swipeOptions={{
                continuous: true,
                auto: 2000
            }}
            >
        {
            this.state.lunbolist.map(item => <img src={item.imageUrl} key={item.id}/>

            )
            }
        </ReactSwipe>
        <section className="section" >
            <div className="ninepieces">
                <div className="ninepieces_1">
                    <p className="p1">9块9包邮</p>
                    <p className="p2">保你不吃亏</p>
                </div>
            <img src={
            this.state.imglist.length ?
                this.state.imglist[0].imageUrl : null
            } />
            </div>
            <div className="coupon">
                <div>
                    <p className="p1">超值大额券</p>
                    <p className="p2">优惠直击低价</p>
                </div>
                <img src={
            this.state.imglist.length ?
                this.state.imglist[2].imageUrl : null
            } alt=""/>
            </div>
            <div className="coupon">
                <div>
                    <p className="p1">年底女装清仓</p>
                    <p className="p2">每日更新</p>
                </div>
                <img src={
            this.state.imglist.length ?
                this.state.imglist[3].imageUrl : null
            } alt=""/>
            </div>



            
        </section>
          <div className="top-list">
              <div className="head-list">
                <span className="title">每日排行榜</span>
                <a href="javascript:;" className="right">查看全部></a>
              </div>
              <div className="top-swipe">
                      <div className="swiper-container">
                    <div className="swiper-wrapper">
                    {
            this.state.toplist.map(item => <div className="swiper-slide" key={item.id}>
                <a href="javascript:;" className="top-commodity">
                            <img className="tag" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAyCAYAAADImlLUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MUYzNTQwODE5OUJFMTFFNzhFNkFBMUI3QUM5ODIwRUIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MUYzNTQwODI5OUJFMTFFNzhFNkFBMUI3QUM5ODIwRUIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxRjM1NDA3Rjk5QkUxMUU3OEU2QUExQjdBQzk4MjBFQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxRjM1NDA4MDk5QkUxMUU3OEU2QUExQjdBQzk4MjBFQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkdzHnkAAAc4SURBVHja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" />
                            <div className="commodity-img" >
                            <img src={item.image}/></div>
                            <div className="commodity-info">
                                <div className="commodity-title">{item.title}</div>
                            
                            <div className="commodity-price">
                                <span className="price"><i className="price-tag">￥</i>{parseInt(item.price)}
                                {(item.price * 10 - parseInt(item.price) * 10) != 0 ?

                    <span className="digit">.{item.price * 10 - parseInt(item.price) * 10} </span> : null}</span>
                                <span className="num">{item.saleNum }人已买</span>
                            </div>
                            </div>
                            </a>
                            
                        </div>
            )}
                        
                   

                    </div>
                   

                  </div>
              </div>

              <div className="split-line">
                <span className="line"></span>
                <span className="text">小编精选，全场特惠 (ง •̀_•́)ง</span>
                <span className="line"></span>

              </div>


              
          </div>

          <div className="content">
            <ul>
                {
            this.state.datalist.map(item => <li key={item.id}>
                {item.type == 1 ?
                    <div className="commodity-card" key={item.id}>

                        <div className="commodity-container" key={item.id}>
                            <img src={item.image} className="commodity-card-img" key={item.id}/>
                        </div>
                        
                    <div className="commodity-card-msg">
                            <div className="commodity-card-title">{item.qunTitle}</div>
                            <div className="commodity-card-keyword">
                                <span className="keyword">天猫</span>
                                <span className="free-postage">包邮</span>
                            </div>
                            <div className="commodity-card-foot">
                               <div className="left">
                                    <span className="price">
                                        <span className="price-tag">￥</span>
                                        <span className="price-strong">{parseInt(item.price)}</span>
                               {(item.price * 10 - parseInt(item.price) * 10) != 0 ?

                        <span className="digit">.{item.price * 10 - parseInt(item.price) * 10} </span> : null}
                                    </span>
                                {(item.saleNum * 0.0001) < 1 ? <span className="sale-num">{item.saleNum}人已买</span> : <span className="sale-num">{Math.floor(item.saleNum * 0.0001) + 0.1}万人已买</span>}
                                    
                                    <span className="coupon-value">{item.couponValue}</span>
                               </div> 
                            </div>
                        </div>
                    </div> : <div className="banner-card" style={{
                        backgroundImage: `url(${item.image})`
                    }}></div>}
                </li>

            )
            }
            </ul>
              
          </div>



        </div>
        )
    }
}
export default Recommend