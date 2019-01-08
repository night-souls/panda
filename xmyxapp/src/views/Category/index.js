import React, { Component } from "react"
class Category extends Component {
    componentDidMount() {
        console.log(this.props.match.params.id);
    }
    render() {
        return <div>
     类别
		
		</div>
    }
}
export default Category