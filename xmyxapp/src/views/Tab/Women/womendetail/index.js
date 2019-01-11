import React, { Component } from "react"
import "./index.scss"
import { connect } from "react-redux"
class womenDetail extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {

        this.props.hide();
    }
    componentWillUnmount() {
        this.props.show();
    }


    render() {
        return <div id="womenDetail">
		<ul>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>111</li>
        <li>222</li>
        </ul>
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



})(womenDetail)