import React, { Component } from "react"
import { connect } from "react-redux"
import axios from "axios"
import "./index.scss"
import { PullToRefresh } from 'antd-mobile'
class Result extends Component {
    constructor(props) {
        super(props)
        this.state = {
            datalist: [],
            refreshing: false,
            down: true,
            need: 0,
            id: null
        }
    }
    componentWillMount() {
        this.props.hide();
    }
    componentDidMount() {
        this.props.hide();
        console.log(this.props.match.params.id);

        this.setState({
            id: this.props.match.params.id
        })
        axios({
            url: `http://www.xiongmaoyouxuan.com/api/search?word=${window.encodeURIComponent(this.props.match.params.id)}&start=0&sort=0&couponOnly=NaN&minPrice=0&maxPrice=99999`
        }).then(res => {
            console.log(res.data.data.list)
            this.setState({
                datalist: res.data.data.list
            })

        })
    }

    componentWillUnmount() {
        this.props.show();
    }

    render() {
        return <div>
          <div className="content">
          <PullToRefresh
            demping={60}
            ref={el => this.ptr = el}
            direction={'up'}
            refreshing={this.state.refreshing}
            onRefresh={() => {
                this.setState({
                    refreshing: true,
                    need: this.state.need += 40
                });
                axios({
                    url: `http://www.xiongmaoyouxuan.com/api/search?word=${this.props.match.params.id}&start=${this.state.need}&sort=0&couponOnly=NaN&minPrice=0&maxPrice=99999`
                }).then(res => {
                    console.log(res.data.data.list)
                    this.setState({
                        refreshing: false,
                        datalist: [...this.state.datalist, ...res.data.data.list]
                    })

                })
            }}>
            {this.state.datalist.length ?
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
                : null}
              </PullToRefresh>
          </div>
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

})(Result)