import React, { Component } from "react"
import store from "../../store"
import { connect } from "react-redux"
class Detail extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.hide();
    }
    componentDidMount() {
        console.log(this.props.match.params.id);
    }
    componentWillUnmount() {
        this.props.show();
    }
    render() {
        return <div>
      详情
		
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



})(Detail)
