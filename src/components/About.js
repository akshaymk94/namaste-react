import React from "react";
import UserContext from "./contexts/UserContext";

class About extends React.Component {

    constructor() {
        super()
        // console.log("Parent constructor")
    }

    componentDidMount() {
        // console.log("Parent componentDidMount")
    }

    render() {

        // console.log("Parent render")
        return (
            <>
                <h1>About us</h1>
                <h2>Learn. Grow. Inspire</h2>
                <UserContext.Consumer>
                    {value => <div>{`${value.lastname}, ${value.firstname}`}</div>}
                </UserContext.Consumer>
                {/* <UserClass name={"Child 1"} />
                <UserClass name={"Child 2"} /> */}
            </>
        )
    }
};

export default About;