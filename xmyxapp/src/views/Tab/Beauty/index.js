import React, { Component } from "react"
import "./index.scss"
import {getLittle} from './model.js'

class Baeuty extends Component {
    constructor(props){
        super(props);

        this.state = {
            littleList:[],
            datalist:[],
            infoList:[],
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
        return <div id="beauty">
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
                                <li key={item.id}>
                                <img src={item.imageUrl}/>
                                <p>{item.title}</p>
                                </li>)
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
                                <ul id="tupian">
                                    {
                                        this.state.datalist.map(item=>
                                            <li key={item.id}>
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
                            </div>
                    </div>
 </div>
    }
}
export default Baeuty