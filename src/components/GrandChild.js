import React from "react";

class GrandChild extends React.Component {

    constructor(props) {
        super(props)

        console.log(this.props.name + "constructor")
    }

    componentDidMount() {
        console.log(this.props.name + "componentDidMount")
    }

    render() {
        console.log(this.props.name + "render")
    }
}

export default GrandChild;