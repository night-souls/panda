import React, { Component } from "react"
import "./index.scss"
import {getLittle} from './model.js'
import {NavLink} from 'react-router-dom'
import {PullToRefresh} from 'antd-mobile'
import ReactDOM from 'react-dom'


class Baeuty extends Component {
    constructor(props){
        super(props);

        this.state = {
            littleList:[],
            datalist:[],
            infoList:[],
            refreshing:false,
            down:true,
            need:0,
            data:[],
            height:document.documentElement.clientHeight,
        };
    }
    componentDidMount(){
        const hei = this.state.height - ReactDOM.findDOMNode(this.lv).offsetTop;
        getLittle().then(res=>{
            console.log(res)
            this.setState({
                littleList:res.categories,
                datalist:res.items.list,
                height: hei,
            })
        })



    }
    render() {
        return <div id="beauty">
        <PullToRefresh
                         damping={60}
                         style={{
                            height: this.state.height,
                            overflow: 'auto', 
                        }}
                         ref={el => this.lv = el}
                         direction={ 'up' }
                         refreshing={this.state.refreshing}
                         onRefresh={() => { 
                             this.setState({refreshing:true,need:this.state.need+=20 });
                             getLittle(this.state.need).then(res=>{this.setState({
                                 refreshing:false,datalist:[...this.state.datalist,...res.items.list]
                             })})
                            }
                        }>
                    <div className="up">
                        <div className="nav">
                        <span className="line"></span>
                        <span className="text"></span>
                        <span className="con">精选潮流</span>
                        <span className="text"></span>
                        <span className="line"></span>
                        </div>
                        <ul id="list"> 
                                {
                                    this.state.littleList.map(item=>
                                <li key={item.id} ><NavLink to="/tab/1" activeClassName="topli">
                                <img src={item.imageUrl}/>
                                <p>{item.title}</p>
                                </NavLink></li>)
                                }
                        </ul>
                    </div>
        

                    <div className="content">
                            <div className="down">
                                <div className="nav">
                                    <span className="line"></span>
                                    <span className="text"></span>
                                     <span className="con">大家都在逛</span>
                                    <span className="text"></span>
                                    <span className="line"></span>
                                </div>
                                <div>
                        {this.state.datalist.length?
                                <ul id="tupian">
                                    {
                                        this.state.datalist.map(item=>
                                            <li key={item.id} onClick={this.handleClick.bind(this,item.id)}>
                                                <img src={item.image}/>
                                                <div className="info">
                                                    <p>{item.title}</p>
                                                    {
                                                        item.platform==1?
                                                    <span className="taobao">淘宝</span>
                                                    :<span className="tianmao">天猫</span>
                                                    }
                                                    <span className="bao">包邮</span>
                                                    <div className="d1">                                                                                           
                                                    <span className="price">￥{item.price}</span>
                                                    <span className="num">{item.saleNum}人已买</span>
                                                    {
                                                        item.couponValue==""?
                                                        <span>{item.couponValue}</span>
                                                        :<span className="value">{item.couponValue}</span>
                                                    }
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    }
                                </ul>
                                :null
                                 }
                            </div>
                            </div>
                    </div>
                    </PullToRefresh>
 </div>
    }

    handleClick(id){
        console.log(this.props);
        this.props.history.push(`/tab/3/${id}`)
    }
}
export default Baeuty