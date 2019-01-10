import React, { Component } from "react";
import Swiper from "swiper"
import "swiper/dist/css/swiper.css"
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
        window.onscroll = this.hanleScroll.bind(this)
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 4,
            spaceBetween: 0,
            slideToClickedSlide: true,
            speed: 2000



        });
    }


    render() {
        return (
            <div id="navbar" className={this.state.isShow ? '' : "hide11111"}>
				<div className="search-form">
					<div className="input-form">
						<div className="input1">
						<p>搜索商品, 发现更多优选</p></div>
					</div>

				</div>
				<div className="home-nav">
					<div className="home">
						<div className="home_1">今日推荐</div>
					</div>
					<div className="line"></div>
				
				<div className="nav-swipe">
				  <div class="swiper-container">
				    <div class="swiper-wrapper">
				      <div class="swiper-slide"><NavLink to="/tab/2" activeClassName="zlxactive">女装</NavLink></div>
				      <div class="swiper-slide"><NavLink to="/tab/5" activeClassName="zlxactive">男装</NavLink></div>
				      <div class="swiper-slide"><NavLink to="/tab/3" activeClassName="zlxactive">美妆</NavLink></div>
				      <div class="swiper-slide"><NavLink to="/tab/4" activeClassName="zlxactive">配饰</NavLink></div>
				      <div class="swiper-slide"><NavLink to="/tab/13" activeClassName="zlxactive">女鞋</NavLink></div>
				      <div class="swiper-slide"><NavLink to="/tab/19" activeClassName="zlxactive">男鞋</NavLink></div>
				      <div class="swiper-slide"><NavLink to="/tab/10" activeClassName="zlxactive">零食</NavLink></div>
				      <div class="swiper-slide"><NavLink to="/tab/24" activeClassName="zlxactive">母婴</NavLink></div>
				      <div class="swiper-slide"><NavLink to="/tab/14" activeClassName="zlxactive">箱包</NavLink></div>
				      <div class="swiper-slide"><NavLink to="/tab/15" activeClassName="zlxactive">洗漱</NavLink></div>
				      <div class="swiper-slide"><NavLink to="/tab/6" activeClassName="zlxactive">周边</NavLink></div>
				      <div class="swiper-slide"><NavLink to="/tab/12" activeClassName="zlxactive">数码</NavLink></div>
				      <div class="swiper-slide"><NavLink to="/tab/16" activeClassName="zlxactive">内衣</NavLink></div>
				      <div class="swiper-slide"><NavLink to="/tab/17" activeClassName="zlxactive">成人</NavLink></div>
				      <div class="swiper-slide"><NavLink to="/tab/7" activeClassName="zlxactive">日用</NavLink></div>
				      <div class="swiper-slide"><NavLink to="/tab/11" activeClassName="zlxactive">文体</NavLink></div>

				    </div>
				  
				  
				  </div>
				</div>

			</div>

			<span className="home-nav-sbtn"></span>


			</div>


        )
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
export default Navbar;
