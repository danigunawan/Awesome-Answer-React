import React, { Component } from "react";

class CurrentDateTime extends Component {
    // const time = (new Date()).toLocaleDateString();
    constructor(props) {
        super(props);

        this.state = {
            date: new Date()
        }
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.intervalId = setInterval(() => {
            // console.log("This is the callback to setInterval");
            this.setState({
                date: new Date() 
            });
        }, 1000);
        console.log('this.intervalId', this.intervalId);
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
        // This method is called before the component is removed
        // from the page/DOM.
        // Use it to clean up setInterval, setTimeouts, even listeners, etc.

        /* the id of the interval we want to stop */
        clearInterval(this.intervalId);
    }

    render () {
        return (
            <div>Current Time: {this.props.onlyTime ? this.state.date.toLocaleTimeString() : this.state.date.toLocaleString() }</div>
        );
    };

}

export default CurrentDateTime;