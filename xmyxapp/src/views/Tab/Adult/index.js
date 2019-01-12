import { PullToRefresh } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css'
import React, { Component } from "react"
import axios from 'axios'
import './index.scss'
import ReactDOM from 'react-dom'
import { getlist12, getlist14 } from "./model";
import { NavLink } from "react-router-dom"
import { Route, Switch } from "react-router-dom"
class Adult extends Component {
    constructor(props) {
        super(props);

        this.state = {
            refreshing: false,
            down: true,
            need: 0,
            data: [],
            adultli: [],
            adultlist: [],
            isShow: false,
            height: document.documentElement.clientHeight,
        };
    }

      componentWillMount() {

        
        axios({
            url: `http://www.xiongmaoyouxuan.com/api/tab/17?start=0`
        }).then(res => {
            this.setState({
                adultli: res.data.data.categories
            })

        })
    }
    componentDidMount() {
        console.log(ReactDOM.findDOMNode(this.lv))
        const hei = this.state.height - ReactDOM.findDOMNode(this.lv).offsetTop;
        //setState第二个参数是属性对象props
        getlist12(this.state.need).then(res => {
            this.setState({
                height: hei,
                adultlist: res.list
            })
        })

    }
    render() {
        return (
            <div>
        <div>
        <p className="ltitle">潮流精选</p>
       <ul className="xiaotu">
       {
            this.state.adultli.length ?
                this.state.adultli.map(item => <li onClick=
                    {this.todong.bind(this, item.url.slice(-4))} key={item.id}>
        <img src={item.imageUrl }/>
         <p>{item.title}</p></li>) : null
            }
        </ul>
        </div>
       <div className="my1234">
       <p className="ltitle1">大家都在用</p>
        
                <ul>
               
              <PullToRefresh
                    damping={50}
                     style={{
                        height: this.state.height,
                        overflow: 'auto', 
                    }}
                     ref={el => this.lv = el}
                    direction={ 'up' }
                    refreshing={this.state.refreshing}
                    onRefresh={() => {
                        this.setState({
                            refreshing: true,
                            need: this.state.need += 20
                        });
                        getlist12(this.state.need).then(res => {
                            this.setState({
                                refreshing: false,
                                adultlist: [...this.state.adultlist, ...res.list]
                            })
                        })
                    }}
                    >
                     {this.state.adultlist.length ?
                this.state.adultlist.map(item => 
                    <li key={item.id} onClick={this.toDetail.bind(this,item.id)}>
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
                                        <span className="price-strong">{parseInt(item.price)}
                                        </span>
                               {(item.price * 10 - parseInt(item.price) * 10) != 0 ?

                            <span className="digit">
                            .{item.price * 10 - parseInt(item.price) * 10} </span> : null}
                                    </span>
                                {(item.saleNum * 0.0001) < 1 ? <span className="sale-num">
                                {item.saleNum}人已买</span> : <span className="sale-num">
                                {Math.floor(item.saleNum * 0.0001) + 0.1}万人已买</span>}
                                    
                                    <span className="coupon-value">{item.couponValue}</span>
                               </div> 
                            </div>
                        </div>
                    </div> : <div className="banner-card" style={{
                            backgroundImage: `url(${item.image})`
                        }}></div>}
                </li>

                ): null
                }
              </PullToRefresh> 
           
               </ul> 
           
       </div>
    </div>)
    }

    toDetail(id) {
        this.props.history.push(`/tab/detail17/${id}`)
    }
    todong(id) {
        // console.log(this.props.history)
        this.props.history.push(`/tab/17/${id}`)
    }
}

const Adult1 = (props) => <Adult {...props}></Adult>

export { Adult1 }
