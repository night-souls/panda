
import React, { Component } from "react"
import { getLunbo } from "./model"
import "./index.scss"
import ReactSwipe from "react-swipe"
import axios from "axios"
class Recommend extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lunbolist: []
        };
    }
    componentWillMount() {
        getLunbo().then(res => {
            console.log(res)
            this.setState({
                lunbolist: res
            })
        })
    }


    render() {
        return (
            <div id="Index">
        <ReactSwipe
            key={this.state.lunbolist.length}
            className="carousel"
            swipeOptions={{
                continuous: true,
                auto: 2000
            }}
            >
        {
            this.state.lunbolist.map(item => <img src={item.imageUrl} key={item.id}/>

            )
            }
        </ReactSwipe>
        <section>
        	



        	
        </section>


		</div>
        )
    }
}
export default Recommend