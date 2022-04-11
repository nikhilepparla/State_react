import React from "react";
import { Component } from "react";
class Home extends Component {
    render() {
        const colors = `btn btn-${this.props.color}`
        const nameOfSubmit = `${this.props.text}`
        return (
            <div>
                <button className={colors}>{nameOfSubmit}</button>
            </div>
        )
    }
}
Home.defaultProps = {
    text: 'Click Me',
    color: 'primary'
}
export default Home;
