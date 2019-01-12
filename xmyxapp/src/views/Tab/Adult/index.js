import { PullToRefresh } from 'antd-mobile';
import React, { Component } from "react"
import axios from 'axios'
import './index.scss'
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
            isShow: false
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

        //setState第二个参数是属性对象props
        getlist12(this.state.need).then(res => {
            this.setState({
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
                this.state.adultli.map(item => <li onClick={this.todong.bind(this, item.url.slice(-4))} key={item.id}>
        <img src={item.imageUrl }/>
         <p>{item.title}</p></li>) : null
            }
        </ul>
        </div>
       <div >
       <p className="ltitle1">大家都在用</p>
        <ul className="down1">
          {
            this.state.adultlist.length ?
                this.state.adultlist.map(item => <li key={item.id}
                    onClick={this.todetail.bind(this, item.id)}
                    >
          <img src={item.image} title={item.qunTitle} className="goods"/>
          <p>{item.title}</p><div className="baodi3">
          <span className="baodi1">天猫</span>
           <span className="baodi2">  包邮</span></div>
           <p><span className="count5">${item.originPrice}</span></p></li>
                ) : null
            }
      <PullToRefresh
            damping={50}
            ref={el => this.ptr = el}
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
      </PullToRefresh>
       </ul>
       </div>
    </div>)
    }
    componentWillUpdate() {}
    componentWillUnmount() {}
    todetail(id) {
        this.props.history.push(`/tab/detail17/${id}`)
    }
    todong(id) {
        // console.log(this.props.history)
        this.props.history.push(`/tab/17/${id}`)
    }
}

const Adult1 = (props) => <Adult {...props}></Adult>

export { Adult1 }
