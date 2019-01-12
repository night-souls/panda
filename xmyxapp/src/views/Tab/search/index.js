import React, { Component } from "react"
import { NavLink } from "react-router-dom"
// import store from "../../store"

import { connect } from "react-redux"
import "./index.scss"
class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null
        }
    }

    componentWillMount() {
        this.props.hide();
    }
    componentWillUpdate() {
        this.props.hide();
    }

    componentWillUnmount() {
        this.props.show();
    }
    render() {
        return <div className="search">
        <header className="nav-bar">
      		<div className="search-form">
      			<div className="search-close" onClick={this.handbackClick.bind(this)}>返回</div>
      			<form >
      				<input type="text" placeholder="搜索商品，发现更多优选" ref="mytext"/>
      			</form>
      			<div className="search-button" onClick={this.handleEvent.bind(this)}>搜索</div>
     		</div>
		</header>

		<div className="search-content">
			<div className="hotwords">
				<h2 className="title">热门搜索</h2>
				<span className="hotWord">毛衣 女</span>
				<span className="hotWord highlight">棉服</span>
				<span className="hotWord">情侣装</span>
				<span className="hotWord highlight">打底衫 女</span><br/>
				<span className="hotWord">小白鞋</span>
				<span className="hotWord highlight">口红</span>
				<span className="hotWord highlight">保暖内衣</span><br/>
				<span className="hotWord">长袖T恤 女</span>
			</div>
		</div>
		<div className="category">
			<h2 className="title">商品分类</h2>
                      <div className="category-item"><NavLink to="/tab/2" replace  >女装</NavLink></div>
                      <div className="category-item"><NavLink to="/tab/5" replace  >男装</NavLink></div>
                      <div className="category-item"><NavLink to="/tab/3" replace >美妆</NavLink></div>
                      <div className="category-item"><NavLink to="/tab/4" replace >配饰</NavLink></div>
                      <div className="category-item"><NavLink to="/tab/13" replace >女鞋</NavLink></div>
                      <div className="category-item"><NavLink to="/tab/19" replace >男鞋</NavLink></div>
                      <div className="category-item"><NavLink to="/tab/10" replace >零食</NavLink></div>
                      <div className="category-item"><NavLink to="/tab/24" replace >母婴</NavLink></div>
                      <div className="category-item"><NavLink to="/tab/14" replace >箱包</NavLink></div>
                      <div className="category-item"><NavLink to="/tab/15" replace >洗漱</NavLink></div>
                      <div className="category-item"><NavLink to="/tab/6" replace >周边</NavLink></div>
                      <div className="category-item"><NavLink to="/tab/12" replace >数码</NavLink></div>
                      <div className="category-item"><NavLink to="/tab/16" replace >内衣</NavLink></div>
                      <div className="category-item"><NavLink to="/tab/17" replace >成人</NavLink></div>
                      <div className="category-item"><NavLink to="/tab/7" replace >日用</NavLink></div>
                      <div className="category-item"><NavLink to="/tab/11" replace >文体</NavLink></div>
		</div>
		</div>
    }
    handbackClick() {
        this.props.history.go(-1)
    }
    handleEvent() {
        this.setState({
            data: this.refs.mytext.value
        }, function() {})
        this.props.history.push(`/s/${this.refs.mytext.value}`)
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



})(Search)
