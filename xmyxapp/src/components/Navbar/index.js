import React, { Component } from "react";
import Swiper from "swiper"
import { NavLink } from "react-router-dom"
import "./index.scss"
class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShow: true
        };
    }

    componentDidMount() {
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 3.6,
            spaceBetween: 0,
            centeredSlides: true,
            slideToClickedSlide: true,
            pagination: {
                el: '.swiper-scrollba',
                clickable: true,
            },
        });
    }


    render() {
        return (
            <div id="navbar">
				<div className="search-form">
					<div className="input-form">
						<div className="input">
						<p>搜索商品, 发现更多优选</p></div>
					</div>

				</div>
				<div className="home-nav">
					<div className="home">
						<div>今日推荐</div>
					</div>
					<div className="line"></div>
				
				<div className="nav-swipe">
				  <div className="swiper-container">
				    <div className="swiper-wrapper swipe-div">
				    <div className="swiper-slide swiper-slide-prev"></div>
				      <div className="swiper-slide"><div className="swipe - item1"><NavLink to="/tab/2" activeClassName="zlxactive"><span>女装</span></NavLink></div></div>
				      <div className="swiper-slide"><div className="swipe-item1"><NavLink to="/tab/5" activeClassName="zlxactive"><span>男装</span></NavLink></div></div>
				      <div className="swiper-slide"><div className="swipe-item1"><NavLink to="/tab/3" activeClassName="zlxactive"><span>美妆护肤</span></NavLink></div></div>
				      <div className="swiper-slide"><div className="swipe-item1"><NavLink to="/tab/4" activeClassName="zlxactive"><span>配饰</span></NavLink></div></div>
				      <div className="swiper-slide"><div className="swipe-item1"><NavLink to="/tab/13" activeClassName="zlxactive"><span>女鞋</span></NavLink></div></div>
				      <div className="swiper-slide"><div className="swipe-item1"><NavLink to="/tab/19" activeClassName="zlxactive"><span>男鞋</span></NavLink></div></div>
				      <div className="swiper-slide"><div className="swipe-item1"><NavLink to="/tab/10" activeClassName="zlxactive"><span>零食王国</span></NavLink></div></div>
				      <div className="swiper-slide"><div className="swipe-item1"><NavLink to="/tab/24" activeClassName="zlxactive"><span>母婴用品</span></NavLink></div></div>
				      <div className="swiper-slide"><div className="swipe-item1"><NavLink to="/tab/14" activeClassName="zlxactive"><span>箱包</span></NavLink></div></div>
				      <div className="swiper-slide"><div className="swipe-item1"><NavLink to="/tab/15" activeClassName="zlxactive"><span>个人洗漱</span></NavLink></div></div>
				      <div className="swiper-slide"><div className="swipe-item1"><NavLink to="/tab/6" activeClassName="zlxactive"><span>手机周边</span></NavLink></div></div>
				      <div className="swiper-slide"><div className="swipe-item1"><NavLink to="/tab/12" activeClassName="zlxactive"><span>数码家电</span></NavLink></div></div>
				      <div className="swiper-slide"><div className="swipe-item1"><NavLink to="/tab/16" activeClassName="zlxactive"><span>内衣袜子</span></NavLink></div></div>
				      <div className="swiper-slide"><div className="swipe-item1"><NavLink to="/tab/17" activeClassName="zlxactive"><span>成人用品</span></NavLink></div></div>
				      <div className="swiper-slide"><div className="swipe-item1"><NavLink to="/tab/7" activeClassName="zlxactive"><span>日用家居</span></NavLink></div></div>
				      <div className="swiper-slide"><div className="swipe-item1"><NavLink to="/tab/11" activeClassName="zlxactive"><span>文体娱乐</span></NavLink></div></div>
				    </div>
				   </div>
				</div>

			</div>

			<span className="home-nav-sbtn"></span>


			</div>


        )
    }
}
export default Navbar;
