import React, { Component } from "react";
import Swiper from "swiper"
import "swiper/dist/css/swiper.css"
import { NavLink } from "react-router-dom"
import "./index.scss"
import { connect } from "react-redux"
import { getList } from "./model"
class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShow: true,
            clickShow: false,
            datalist: []
        };
    }
    componentWillMount() {
        getList().then(res => {
            console.log(res)
            this.setState({
                datalist: res
            })
        })
    }
    componentDidMount() {

        window.onscroll = this.hanleScroll.bind(this)
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 4,
            spaceBetween: 0,
            slideToClickedSlide: true,
            speed: 2000



        });
    }
    componentDidUpdate() {
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 4,
            spaceBetween: 0,
            slideToClickedSlide: true,
            speed: 2000



        });

    }

    componentWillUnmount() {
        window.onscroll = null;
    }


    render(props1) {
        return (
            <div >
            {this.props.navbarshow ?
                <div id="navbar" className={this.state.isShow ? '' : "hide11111"}>
            <a href="/#/search">
                <div className="search-form">
                    <div className="input-form">
                        <div className="input1">
                        <p>搜索商品, 发现更多优选</p>
                        </div>
                    </div>

                </div>
                </a>
                <div className="home-nav">
                    <div className="home">
                        <div className="home_1"><NavLink to="/tab/1" replace  activeClassName="zlxactive">今日推荐</NavLink></div>
                    </div>
                    <div className="line"></div>
                
                <div className="nav-swipe">
                  <div className="swiper-container">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide"><NavLink to="/tab/2" replace  activeClassName="zlxactive">女装</NavLink></div>
                      <div className="swiper-slide"><NavLink to="/tab/5" replace  activeClassName="zlxactive">男装</NavLink></div>
                      <div className="swiper-slide"><NavLink to="/tab/3" replace activeClassName="zlxactive">美妆</NavLink></div>
                      <div className="swiper-slide"><NavLink to="/tab/4" replace activeClassName="zlxactive">配饰</NavLink></div>
                      <div className="swiper-slide"><NavLink to="/tab/13" replace activeClassName="zlxactive">女鞋</NavLink></div>
                      <div className="swiper-slide"><NavLink to="/tab/19" replace activeClassName="zlxactive">男鞋</NavLink></div>
                      <div className="swiper-slide"><NavLink to="/tab/10" replace activeClassName="zlxactive">零食</NavLink></div>
                      <div className="swiper-slide"><NavLink to="/tab/24" replace activeClassName="zlxactive">母婴</NavLink></div>
                      <div className="swiper-slide"><NavLink to="/tab/14" replace activeClassName="zlxactive">箱包</NavLink></div>
                      <div className="swiper-slide"><NavLink to="/tab/15" replace activeClassName="zlxactive">洗漱</NavLink></div>
                      <div className="swiper-slide"><NavLink to="/tab/6" replace activeClassName="zlxactive">周边</NavLink></div>
                      <div className="swiper-slide"><NavLink to="/tab/12" replace activeClassName="zlxactive">数码</NavLink></div>
                      <div className="swiper-slide"><NavLink to="/tab/16" replace activeClassName="zlxactive">内衣</NavLink></div>
                      <div className="swiper-slide"><NavLink to="/tab/17" replace activeClassName="zlxactive">成人</NavLink></div>
                      <div className="swiper-slide"><NavLink to="/tab/7" replace activeClassName="zlxactive">日用</NavLink></div>
                      <div className="swiper-slide"><NavLink to="/tab/11" replace activeClassName="zlxactive">文体</NavLink></div>

                    </div>
                  
                  
                  </div>
                </div>

            </div>

<span className="home-nav-sbtn" onClick={this.handleClick.bind(this)}></span>
        {this.state.clickShow ?
                    <div className="float-layer">
                <div className="search-form">
                    <div className="input-form">
                        <div className="input1">
                        <p>搜索商品, 发现更多优选</p>
                        </div>
                    </div>
                </div>
            <div className="float-title">
                <p>全部分类</p>
                <span onClick={this.handleShowClick.bind(this)}>叉</span>
            </div>
            <ul className="float-tabs">
            {

                    this.state.datalist.map(item => <NavLink to={`/tab/${item.id}`} replace activeClassName="zlxactive" key={item.id}> <li className="float-tab"  key={item.id} onClick={this.handleHideClick.bind(this)}>
                    <div key={item.id}>
                        <img src={item.imageUrl}/>
                        <div key={item.id}>{item.name}</div>
                    </div>
                </li></NavLink>
                    )}
            </ul>


            </div>
                    : null}

            </div>
                : null}
            </div>
        )
    }
    handleClick() {
        this.setState({
            clickShow: true
        }, function() {
            console.log(this.state.clickShow)
        })
    }
    handleShowClick() {
        this.setState({
            clickShow: false
        })
    }
    handleHideClick() {
        this.setState({
            clickShow: false
        })
    }


    hanleScroll() {
        // console.log(document.documentElement.scrollTop)
        if ((document.documentElement.scrollTop || document.body.scrollTop) < 10) {


            this.setState({
                isShow: true
            })
        } else {
            this.setState({
                isShow: false
            })
        }
    }
}
export default connect((state) => {
    return {
        navbarshow: state.navbarReducer
    }
})(Navbar);
