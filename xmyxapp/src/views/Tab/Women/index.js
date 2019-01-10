import React, { Component } from "react"
import "./index.scss"
import {getLittle} from './model.js'
import {NavLink} from 'react-router-dom'
import {PullToRefresh} from 'antd-mobile'


class Women extends Component {
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
         
        };
    }
    componentDidMount(){
        getLittle().then(res=>{
            console.log(res)
            this.setState({
                littleList:res.categories,
                datalist:res.items.list,
             
            })
        })



    }
    render() {
        return <div id="women">
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
                                <li key={item.id}><NavLink to="/tab/1" replace activeClassName="topli">
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
                        <PullToRefresh
                         damping={60}
                         ref={el => this.ptr = el}
                         direction={ 'up' }
                         refreshing={this.state.refreshing}
                         onRefresh={() => { 
                             this.setState({refreshing:true,need:this.state.need+=20 });
                             getLittle(this.state.need).then(res=>{this.setState({
                                 refreshing:false,datalist:[...this.state.datalist,...res.items.list]
                             })})
                            }
                        }>

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
                                                
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    }
                                </ul>
                                :null
                                }
                                </PullToRefresh>
                            </div>
                    </div>
                 
 </div>
    }

    handleClick(id){
        console.log(id)
       this.props.history.push(`/tab/2/${id}`)
    }
}


export default Women