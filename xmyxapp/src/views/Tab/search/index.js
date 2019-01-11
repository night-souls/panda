import React, { Component } from "react"
// import store from "../../store"
import { connect } from "react-redux"
import "./index.scss"
class Search extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.hide();
    }
    // componentDidMount() {
    //     console.log(this.props.match.params.id);
    // }
    componentWillUnmount() {
        this.props.show();
    }
    render() {
        return <div className="search">
        <header className="nav-bar">
      		<div className="search-form">
      			<div className="search-close">返回</div>
      			<form >
      				<input type="text" placeholder="搜索商品，发现更多优选"/>
      			</form>
      			<div className="search-button">搜索</div>
     		</div>
		</header>
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



})(Search)
