import React, {
	Component
} from "react"
class Tab extends Component {
	render() {
		return <div>
			列表
			{this.props.children}

		</div>
	}
}
export default Tab