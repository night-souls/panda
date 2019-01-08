


import React, { Component } from "react"
class Detail extends Component {
    componentDidMount() {
        console.log(this.props.match.params.id);
    }
    render() {
        return <div>
      详情
		
		</div>
    }
}
export default Detail
