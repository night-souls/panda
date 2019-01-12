import React, { Component } from "react"
import { getlist12, getlist13, getlist14 } from './model'
import './index.scss'
import ReactDOM from 'react-dom'
import { PullToRefresh } from 'antd-mobile';
class ActiveR extends Component {
    constructor(props) {
        super(props);

        this.state = {
            refreshing: false,
            down: true,
            need: 0,
            data: [],
            adultlist: [],
            height: document.documentElement.clientHeight,
        };
    }
    toDetail(id) {
        this.props.history.push(`/tab/detail17/${id}`)
    }
    componentDidMount() {
         const hei = this.state.height - ReactDOM.findDOMNode(this.lv).offsetTop;
        getlist13(this.props.match.params.id).then(res => {
            // meets a challenge point

            this.setState({
                adultlist: res.items.list,
                 height: hei
            })
        })

    }
    render() {
        return (
            <div>
       <div >
        <ul className="my1234">
          
      <PullToRefresh
            damping={60}
            style={{height: this.state.height,overflow: 'auto',  }}
            ref={el => this.lv = el}
            direction={ 'up' }
            refreshing={this.state.refreshing}
            onRefresh={() => {
                this.setState({
                    refreshing: true,
                    need: this.state.need += 20
                });
                getlist13(this.props.match.params.id, this.state.need).then(res => {
                    this.setState({
                        refreshing: false,
                        adultlist: [...this.state.adultlist, ...res.items.list]
                    })
                })
            }} >
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
}
export default ActiveR