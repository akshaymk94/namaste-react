import React from "react";
import GrandChild from "./GrandChild";

class UserClass extends React.Component {

    constructor(props) {
        super(props)

        console.log(this.props.name + "constructor")
    }

    componentDidMount() {
        console.log(this.props.name + "componentDidMount")
    }

    render() {
        console.log(this.props.name + "render")

        return (
            <>
                <GrandChild name={`GrandChild 1 in ${this.props.name}`} />
                <GrandChild name={`GrandChild 2 in ${this.props.name}`} />
            </>
        )
    }
}

export default UserClass;